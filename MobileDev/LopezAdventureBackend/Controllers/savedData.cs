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
    public class savedDataController : ControllerBase {
        readonly DataServiceSql _dataFromSql;

        public savedDataController (DataServiceSql fixedData) {
            _dataFromSql = fixedData;
        }

        [HttpGet]
        public IEnumerable<savedData> GetSavedData () {
            return _dataFromSql.GetSavedData ();
        }

        [HttpGet ("{username}")]
        public IEnumerable<savedData> getSavedDataByName (string username) {
            return _dataFromSql.getByNameSavedData (username);
        }

        [HttpPost ("add")]
        public bool AddSave (savedData users) {

            return _dataFromSql.InsertSave (users);
        }

        [HttpDelete ("{Username}")]
        public bool DeleteSavedData (string Username) {
            return _dataFromSql.DeleteSavedDataByUserName (Username);
        }
    }
}