using System.Collections.Generic;
using LopezAdventureBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace LopezAdventureBackend.Services.Context {
    public class dataContext : DbContext {
        public DbSet<loginPlayer> loginPlayerSQL { get; set; }

        public DbSet<savedData> savedDataSQL { get; set; }

        public DbSet<Inventory> InventoryDataSQL { get; set; }

        public dataContext (DbContextOptions<dataContext> options) : base (options) {

        }

        protected override void OnModelCreating (ModelBuilder builder) {
            //oninit
            base.OnModelCreating (builder);
            SeedData (builder);
        }

        private void SeedData (ModelBuilder builder) {
            //Grab info from our Dataserver that has hardcoded data in it
            var fixedData = new List<loginPlayer> () {
                new loginPlayer {
                ID = 1,
                Username = "Abe",
                Password = "12345"
                }
            };
            var fixedData2 = new List<savedData> () {
                new savedData {
                Username = "Abe",
                ID = 1,
                sceneid = 1,
                scene = "The beginning",
                option1 = "Archer",
                option2 = "Rogue",
                option3 = "Warrior",
                optionS = "NA",
                result1 = "2",
                result2 = "2",
                result3 = "2",
                resultS = "NA",
                item1 = "Item01",
                item2 = "Item02",
                item3 = "Item03",
                item4 = "Item04",
                healthChange = 0,
                requiredItem1 = "NA",
                requiredItem2 = "NA",
                requiredItem3 = "NA",
                requiredItem4 = "NA",
                health = 0
                }
            };
            var inventory = new List<Inventory> () {
                new Inventory {
                ID = 1,
                Username = "Abe",
                Inventory1 = "Item01",
                Inventory2 = "Item02",
                Inventory3 = "Item03",
                Inventory4 = "Item04",
                Inventory5 = "Item05",
                Inventory6 = "Item06"
                }
            };
            builder.Entity<loginPlayer> ().HasData (fixedData);
            builder.Entity<savedData> ().HasData (fixedData2);
            builder.Entity<Inventory> ().HasData (inventory);
        }
    }
}