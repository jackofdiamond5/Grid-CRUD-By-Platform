//namespace Grid_Test.Data.Northwind; // Razor won't recognize third level namespace
namespace Grid_Test.Northwind;

public class CustomersType
{
    public string? CustomerID { get; set; }
    public string? CompanyName { get; set; }
    public string? ContactName { get; set; }
    public string? ContactTitle { get; set; }
    public Address? Address { get; set; }
}

public class Address
{
    public string? Street { get; set; }
    public string? City { get; set; }
    public string? Region { get; set; }
    public string? PostalCode { get; set; }
    public string? Country { get; set; }
    public string? Phone { get; set; }
}
