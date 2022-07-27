using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DoctorsData",
                columns: table => new
                {
                    doctorId = table.Column<int>(type: "int", maxLength: 100, nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DoctorName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    specialtyId = table.Column<int>(type: "int", nullable: false),
                    SpecialtyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Availability = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DoctorsData", x => x.doctorId);
                });

            migrationBuilder.CreateTable(
                name: "PatientsData",
                columns: table => new
                {
                    patientId = table.Column<int>(type: "int", maxLength: 100, nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PatientName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatientsData", x => x.patientId);
                });

            migrationBuilder.CreateTable(
                name: "SchedulesData",
                columns: table => new
                {
                    scheduleId = table.Column<int>(type: "int", maxLength: 100, nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    doctorId = table.Column<int>(type: "int", nullable: false),
                    DoctorName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    specialtyId = table.Column<int>(type: "int", nullable: false),
                    SpecialtyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Availability = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SchedulesData", x => x.scheduleId);
                });

            migrationBuilder.CreateTable(
                name: "SpecialtiesData",
                columns: table => new
                {
                    specialtyId = table.Column<int>(type: "int", maxLength: 100, nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    doctorId = table.Column<int>(type: "int", nullable: false),
                    DoctorName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SpecialtyName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SpecialtiesData", x => x.specialtyId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DoctorsData");

            migrationBuilder.DropTable(
                name: "PatientsData");

            migrationBuilder.DropTable(
                name: "SchedulesData");

            migrationBuilder.DropTable(
                name: "SpecialtiesData");
        }
    }
}
