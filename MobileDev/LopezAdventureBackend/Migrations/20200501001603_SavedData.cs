using Microsoft.EntityFrameworkCore.Migrations;

namespace LopezAdventureBackend.Migrations
{
    public partial class SavedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "InventoryDataSQL",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(nullable: true),
                    Inventory1 = table.Column<string>(nullable: true),
                    Inventory2 = table.Column<string>(nullable: true),
                    Inventory3 = table.Column<string>(nullable: true),
                    Inventory4 = table.Column<string>(nullable: true),
                    Inventory5 = table.Column<string>(nullable: true),
                    Inventory6 = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InventoryDataSQL", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "loginPlayerSQL",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_loginPlayerSQL", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "savedDataSQL",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(nullable: true),
                    sceneid = table.Column<int>(nullable: false),
                    scene = table.Column<string>(nullable: true),
                    option1 = table.Column<string>(nullable: true),
                    option2 = table.Column<string>(nullable: true),
                    option3 = table.Column<string>(nullable: true),
                    optionS = table.Column<string>(nullable: true),
                    result1 = table.Column<string>(nullable: true),
                    result2 = table.Column<string>(nullable: true),
                    result3 = table.Column<string>(nullable: true),
                    resultS = table.Column<string>(nullable: true),
                    item1 = table.Column<string>(nullable: true),
                    item2 = table.Column<string>(nullable: true),
                    item3 = table.Column<string>(nullable: true),
                    item4 = table.Column<string>(nullable: true),
                    healthChange = table.Column<int>(nullable: false),
                    requiredItem1 = table.Column<string>(nullable: true),
                    requiredItem2 = table.Column<string>(nullable: true),
                    requiredItem3 = table.Column<string>(nullable: true),
                    requiredItem4 = table.Column<string>(nullable: true),
                    health = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_savedDataSQL", x => x.ID);
                });

            migrationBuilder.InsertData(
                table: "InventoryDataSQL",
                columns: new[] { "ID", "Inventory1", "Inventory2", "Inventory3", "Inventory4", "Inventory5", "Inventory6", "Username" },
                values: new object[] { 1, "Item01", "Item02", "Item03", "Item04", "Item05", "Item06", "Abe" });

            migrationBuilder.InsertData(
                table: "loginPlayerSQL",
                columns: new[] { "ID", "Password", "Username" },
                values: new object[] { 1, "12345", "Abe" });

            migrationBuilder.InsertData(
                table: "savedDataSQL",
                columns: new[] { "ID", "Username", "health", "healthChange", "item1", "item2", "item3", "item4", "option1", "option2", "option3", "optionS", "requiredItem1", "requiredItem2", "requiredItem3", "requiredItem4", "result1", "result2", "result3", "resultS", "scene", "sceneid" },
                values: new object[] { 1, "Abe", 0, 0, "Item01", "Item02", "Item03", "Item04", "Archer", "Rogue", "Warrior", "NA", "NA", "NA", "NA", "NA", "2", "2", "2", "NA", "The beginning", 1 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "InventoryDataSQL");

            migrationBuilder.DropTable(
                name: "loginPlayerSQL");

            migrationBuilder.DropTable(
                name: "savedDataSQL");
        }
    }
}
