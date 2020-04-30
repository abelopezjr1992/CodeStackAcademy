using System;
using System.Collections.Generic;
using System.Linq;
using LopezAdventureGame.Models;
using LopezAdventureGame.Services.Context;

namespace LopezAdventureGame.Services {
    public class DataServiceSql {
        private readonly dataContext _context;
        public DataServiceSql (dataContext context) {
            _context = context;
        }

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

    }
}