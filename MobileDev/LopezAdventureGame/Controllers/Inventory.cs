using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LopezAdventureGame.Models;
using LopezAdventureGame.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LopezAdventureGame.Controllers {
    [ApiController]
    [Route ("Controller")]
    public class InventoryController : ControllerBase {
        readonly DataServiceSql _dataFromSql;

        public InventoryController (DataServiceSql fixedData) {
            _dataFromSql = fixedData;
        }

        [HttpGet]
        public IEnumerable<loginPlayer> GetUserInfo () {
            return _dataFromSql.GetUser ();
        }

        [HttpGet ("username")]
        public IEnumerable<loginPlayer> GetSavedData (string username) {
            return _dataFromSql.GetSavedData (username);
        }

        [HttpPost ("add")]
        public bool AddUser (loginPlayer users) {
            List<loginPlayer> Info = new List<loginPlayer> (_dataFromSql.GetUser ());
            foreach (var item in Info) {
                if (users.Username == item.Username) {
                    return false;
                }
            }
            return _dataFromSql.InsertUser (users);
        }
    }
}