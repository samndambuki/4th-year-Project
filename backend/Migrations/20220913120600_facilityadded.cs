using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    public partial class facilityadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Availability",
                table: "DoctorsData");

            migrationBuilder.AddColumn<string>(
                name: "facility",
                table: "DoctorsData",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "facility",
                table: "DoctorsData");

            migrationBuilder.AddColumn<DateTime>(
                name: "Availability",
                table: "DoctorsData",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
