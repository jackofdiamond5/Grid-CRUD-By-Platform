//namespace Grid_Test.Data.Northwind; // Razor won't recognize third level namespace
namespace Grid_Test.Northwind;

public class EmployeesType
{
    public double? EmployeeID { get; set; }
    public string? LastName { get; set; }
    public string? FirstName { get; set; }
    public string? Title { get; set; }
    public string? TitleOfCourtesy { get; set; }
    public string? BirthDate { get; set; } // this was DateTime? 
    public string? HireDate { get; set; } // this was DateTime? 
    public double? ManagerID { get; set; }
    public string? Notes { get; set; }
    public string? AvatarUrl { get; set; }
    public Address? Address { get; set; }
}
