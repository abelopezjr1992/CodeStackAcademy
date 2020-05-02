using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LopezAdventureBackend.Models;
using LopezAdventureBackend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LopezAdventureBackend.Controllers {
    [ApiController]
    [Route ("[controller]")]
    public class InventoryController : ControllerBase {
        readonly DataServiceSql _dataFromSql;

        public InventoryController (DataServiceSql fixedData) {
            _dataFromSql = fixedData;
        }

        [HttpGet]
        public IEnumerable<Inventory> GetInventories () {
            return _dataFromSql.GetItems ();
        }

        [HttpGet("{userName}")]
        public IEnumerable<Inventory> getInventoryByName(string userName)
        {
            return _dataFromSql.getByName(userName);
        }

        [HttpPost ("add")]
        public bool AddItems (Inventory items) {
            //List<Inventory> Info = new List<Inventory> (_dataFromSql.GetItems ());
            return _dataFromSql.InsertItems(items);
        }

        [HttpDelete ("{Username}")]
        public bool DeleteInventory (string Username) {
            return _dataFromSql.DeleteInventoryByUserName (Username);
        }
    }
}