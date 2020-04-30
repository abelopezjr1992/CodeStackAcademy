namespace LopezAdventureBackend.Models {
    public class Inventory {
        public int ID { get; set; }
        public string Username { get; set; }
        public string Inventory1 { get; set; }
        public string Inventory2 { get; set; }
        public string Inventory3 { get; set; }
        public string Inventory4 { get; set; }
        public string Inventory5 { get; set; }
        public string Inventory6 { get; set; }

        public Inventory () { }

        public Inventory (int ID, string Username, string Inventory1, string Inventory2, string Inventory3, string Inventory4, string Inventory5, string Inventory6) {
            this.ID = this.ID;
            this.Username = this.Username;
            this.Inventory1 = this.Inventory1;
            this.Inventory2 = this.Inventory2;
            this.Inventory3 = this.Inventory3;
            this.Inventory4 = this.Inventory4;
            this.Inventory5 = this.Inventory5;
            this.Inventory6 = this.Inventory6;
        }
    }
}