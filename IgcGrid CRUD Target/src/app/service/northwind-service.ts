/* eslint-disable */

export default class NorthwindService {

  private readonly API_ENDPOINT = 'https://localhost:7244';

  /* Employees */

 // create
 public async addEmployee(data: any): Promise<any> {
  const body = JSON.stringify(data);
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const response = await fetch(`${this.API_ENDPOINT}/Employee`, {
    method: 'POST',
    body,
    headers
  });

  return response;
}

// read
public async getEmployeeData(): Promise<any> {
  const response = await fetch(`${this.API_ENDPOINT}/Employee`, {
    method: 'GET'
  });

  return response.json();
}

// update
public async updateEmployee(data: any): Promise<Response> {
  const body = JSON.stringify(data);
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const response = await fetch(`${this.API_ENDPOINT}/Employee`, {
    method: 'PUT',
    body,
    headers
  });

  return response;
}

// delete
public async deleteEmployee(id: string): Promise<any> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const response = await fetch(`${this.API_ENDPOINT}/Employee/${id}`, {
    method: 'DELETE',
    headers
  });

  return response;
}


  /* Customers */

  // create
  public async addCustomer(data: any): Promise<any> {
    const body = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const response = await fetch(`${this.API_ENDPOINT}/Customer`, {
      method: 'POST',
      body,
      headers
    });

    return response;
  }

  // read
  public async getCustomerData(): Promise<any> {
    const response = await fetch(`${this.API_ENDPOINT}/Customer`, {
      method: 'GET'
    });

    return response.json();
  }

  // update
  public async updateCustomer(data: any): Promise<Response> {
    const body = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const response = await fetch(`${this.API_ENDPOINT}/Customer`, {
      method: 'PUT',
      body,
      headers
    });

    return response;
  }

  // delete
  public async deleteCustomer(id: string): Promise<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const response = await fetch(`${this.API_ENDPOINT}/Customer/${id}`, {
      method: 'DELETE',
      headers
    });

    return response;
  }
}
