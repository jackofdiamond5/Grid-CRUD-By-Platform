using System.Net.Http.Json;

namespace Grid_Test.Northwind
{
    public class NorthwindDataService
    {
        private readonly HttpClient http;

        private readonly string ApiEndpoint = "https://localhost:7244";

        public NorthwindDataService(HttpClient http)
        {
            this.http = http;
        }

        #region Employees
        // create
        public async Task<HttpResponseMessage> AddEmployee(EmployeesType data)
        {
            return await http.PostAsJsonAsync($"{this.ApiEndpoint}/Employee", data);
        }

        // read
        public async Task<EmployeesType[]?> GetEmployeeData()
        {
            return await http.GetFromJsonAsync<EmployeesType[]>($"{this.ApiEndpoint}/Employee");
        }

        // update
        public async Task<HttpResponseMessage> UpdateEmployee(EmployeesType data)
        {
            return await this.http.PutAsJsonAsync($"{this.ApiEndpoint}/Employee/", data);
        }

        // delete
        public async Task<HttpResponseMessage> DeleteEmployee(double? id)
        {
            return await this.http.DeleteAsync($"{this.ApiEndpoint}/Employee/{id}");
        }
        #endregion

        #region Customers
        // create
        public async Task<HttpResponseMessage> AddCustomer(CustomersType data)
        {
            return await http.PostAsJsonAsync($"{this.ApiEndpoint}/Customer", data);
        }

        // read
        public async Task<CustomersType[]?> GetCustomerData()
        {
            return await http.GetFromJsonAsync<CustomersType[]>($"{this.ApiEndpoint}/Customer");
        }

        // update
        public async Task<HttpResponseMessage> UpdateCustomer(CustomersType data)
        {
            return await this.http.PutAsJsonAsync($"{this.ApiEndpoint}/Customer/", data);
        }

        // delete
        public async Task<HttpResponseMessage> DeleteCustomer(string? id)
        {
            return await this.http.DeleteAsync($"{this.ApiEndpoint}/Customer/{id}");
        }
        #endregion
    }
}