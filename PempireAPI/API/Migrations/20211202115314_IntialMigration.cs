using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class IntialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Entity",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Health = table.Column<int>(type: "INTEGER", nullable: false),
                    Mana = table.Column<int>(type: "INTEGER", nullable: false),
                    StrongAgainst = table.Column<int>(type: "INTEGER", nullable: false),
                    WeakAgainst = table.Column<int>(type: "INTEGER", nullable: false),
                    isEnemy = table.Column<bool>(type: "INTEGER", nullable: false),
                    Hero = table.Column<int>(type: "INTEGER", nullable: false),
                    Boss = table.Column<int>(type: "INTEGER", nullable: false),
                    Image = table.Column<string>(type: "TEXT", nullable: false),
                    Gold = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entity", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Item",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    ItemType = table.Column<int>(type: "INTEGER", nullable: false),
                    Health = table.Column<int>(type: "INTEGER", nullable: false),
                    Mana = table.Column<int>(type: "INTEGER", nullable: false),
                    Type = table.Column<int>(type: "INTEGER", nullable: false),
                    EntityId = table.Column<Guid>(type: "TEXT", nullable: true),
                    EntityId1 = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Item", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Item_Entity_EntityId",
                        column: x => x.EntityId,
                        principalTable: "Entity",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Item_Entity_EntityId1",
                        column: x => x.EntityId1,
                        principalTable: "Entity",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "GameState",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    SelectedHeroId = table.Column<Guid>(type: "TEXT", nullable: false),
                    SelectedBossId = table.Column<Guid>(type: "TEXT", nullable: false),
                    BossesDefeated = table.Column<int>(type: "INTEGER", nullable: false),
                    Lives = table.Column<int>(type: "INTEGER", nullable: false),
                    UserId = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GameState", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GameState_Entity_SelectedBossId",
                        column: x => x.SelectedBossId,
                        principalTable: "Entity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GameState_Entity_SelectedHeroId",
                        column: x => x.SelectedHeroId,
                        principalTable: "Entity",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    Password = table.Column<string>(type: "TEXT", nullable: false),
                    ActiveGameStateId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_GameState_ActiveGameStateId",
                        column: x => x.ActiveGameStateId,
                        principalTable: "GameState",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GameState_SelectedBossId",
                table: "GameState",
                column: "SelectedBossId");

            migrationBuilder.CreateIndex(
                name: "IX_GameState_SelectedHeroId",
                table: "GameState",
                column: "SelectedHeroId");

            migrationBuilder.CreateIndex(
                name: "IX_GameState_UserId",
                table: "GameState",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Item_EntityId",
                table: "Item",
                column: "EntityId");

            migrationBuilder.CreateIndex(
                name: "IX_Item_EntityId1",
                table: "Item",
                column: "EntityId1");

            migrationBuilder.CreateIndex(
                name: "IX_Users_ActiveGameStateId",
                table: "Users",
                column: "ActiveGameStateId");

            migrationBuilder.AddForeignKey(
                name: "FK_GameState_Users_UserId",
                table: "GameState",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GameState_Entity_SelectedBossId",
                table: "GameState");

            migrationBuilder.DropForeignKey(
                name: "FK_GameState_Entity_SelectedHeroId",
                table: "GameState");

            migrationBuilder.DropForeignKey(
                name: "FK_GameState_Users_UserId",
                table: "GameState");

            migrationBuilder.DropTable(
                name: "Item");

            migrationBuilder.DropTable(
                name: "Entity");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "GameState");
        }
    }
}
