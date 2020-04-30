namespace LopezAdventureGame.Models {
    public class loginPlayer {
        public int ID { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public loginPlayer () { }

        public loginPlayer (string ID, string Username, string Password) {
            this.ID = this.ID;
            this.Username= this.Username;
            this.Password= this.Password;
        }
    }
}