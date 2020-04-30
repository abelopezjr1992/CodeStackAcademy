namespace LopezAdventureGame.Models {
    public class savedData {
        public int ID { get; set; }
        public string Username { get; set; }
        public int sceneid { get; set; }
        public string scene { get; set; }
        public string option1 { get; set; }
        public string option2 { get; set; }
        public string option3 { get; set; }
        public string optionS { get; set; }
        public string result1 { get; set; }
        public string result2 { get; set; }
        public string result3 { get; set; }
        public string resultS { get; set; }
        public string item1 { get; set; }
        public string item2 { get; set; }
        public string item3 { get; set; }
        public string item4 { get; set; }
        public int healthChange { get; set; }
        public string requiredItem1 { get; set; }
        public string requiredItem2 { get; set; }
        public string requiredItem3 { get; set; }
        public string requiredItem4 { get; set; }
        public int health{get; set;}
        //saving an array?

        public savedData () {

        }
        public savedData (string Username, string ID, int sceneid, string scene, string option2, string option1, string option3, string optionS, string result1, string result2, string result3, string resultS, string item1, string item2, string item3, string item4, int healthChange, string requiredItem1, string requiredItem2, string requiredItem3, string requiredItem4, int health) {
            this.Username= this.Username;
            this.ID= this.ID;
            this.sceneid = this.sceneid;
            this.scene = this.scene;
            this.option1 = this.option1;
            this.option2 = this.option2;
            this.option3 = this.option3;
            this.optionS = this.optionS;
            this.result1 = this.result1;
            this.result2 = this.result2;
            this.result3 = this.result3;
            this.resultS = this.resultS;
            this.item1 = this.item1;
            this.item2 = this.item2;
            this.item3 = this.item3;
            this.item4 = this.item4;
            this.healthChange = this.healthChange;
            this.requiredItem1 = this.requiredItem1;
            this.requiredItem2 = this.requiredItem2;
            this.requiredItem3 = this.requiredItem3;
            this.requiredItem4 = this.requiredItem4;
            this.health= this.health;
        }
    }
}