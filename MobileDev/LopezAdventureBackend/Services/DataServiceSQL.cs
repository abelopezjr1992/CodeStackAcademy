using System;
using System.Collections.Generic;
using System.Linq;
using LopezAdventureBackend.Models;
using LopezAdventureBackend.Services.Context;

namespace LopezAdventureBackend.Services {
    public class DataServiceSql {
        private readonly dataContext _context;
        public DataServiceSql (dataContext context) {
            _context = context;
        }

        //--------------------LoginInfo Functions ---------------------------
        public bool InsertUser (loginPlayer user) {
            var userStuff = _context.Add (user);
            _context.SaveChanges ();
            return true;
        }
        public IEnumerable<loginPlayer> GetUser () {
            return _context.loginPlayerSQL;
        }

        public IEnumerable<loginPlayer> GetSavedData (string username) {
            return _context.loginPlayerSQL.Where (x => x.Username == username);
        }

        //----------------------------------Inventory functions--------------------------------

        public IEnumerable<Inventory> GetItems () {
            return _context.InventoryDataSQL;
        }

        public IEnumerable<Inventory> getByName (string Username) {
            //var userInfo= _context.InventoryDataSQL.Where (x => x.Username == Username);
            return _context.InventoryDataSQL.Where (x => x.Username == Username);
        }

        public bool InsertItems (Inventory items) {
            var ItemStuff = _context.Add (items);
            _context.SaveChanges ();
            return true;
        }

        public bool DeleteInventoryByUserName (string Username) {
            var user = getByNameFunction (Username);
            _context.Remove (user);
            return _context.SaveChanges () != 0;
        }

        public Inventory getByNameFunction (string Username) {
            //var userInfo= _context.InventoryDataSQL.Where (x => x.Username == Username);
            return _context.InventoryDataSQL.SingleOrDefault (x => x.Username == Username);
        }
        
        //----------------------------Saved Data Functions---------------------------------
        public IEnumerable<savedData> GetSavedData () {
            return _context.savedDataSQL;
        }

        public IEnumerable<savedData> getByNameSavedData (string Username) {
            return _context.savedDataSQL.Where (x => x.Username == Username);
        }

        public bool InsertSave (savedData data) {
            var SavedDataStuff = _context.Add (data);
            _context.SaveChanges ();
            return true;
        }

        public bool DeleteSavedDataByUserName (string Username) {
            var user = getByNameSavedDataFunction (Username);
            _context.Remove (user);
            return _context.SaveChanges () != 0;
        }

        public savedData getByNameSavedDataFunction (string Username) {
            //var userInfo= _context.InventoryDataSQL.Where (x => x.Username == Username);
            return _context.savedDataSQL.SingleOrDefault (x => x.Username == Username);
        }

    }
}