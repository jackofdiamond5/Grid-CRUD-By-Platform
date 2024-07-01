import { EmployeeDto } from '../models/CRUDData/employee-dto';
import { CustomerDto } from '../models/CRUDData/customer-dto';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

export async function getEmployeeDtoList(): Promise<EmployeeDto[]> {
	const response = await fetch(`${API_ENDPOINT}/Employees`);
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}

export async function putEmployeeDto(data: any): Promise<EmployeeDto | undefined> {
	if (!data) {
		return Promise.resolve(undefined);
	}
	const body = JSON.stringify(data);
	const headers = {
		Authorization: 'Bearer <auth_value>',
		'Content-Type': 'application/json; charset=utf-8'
	};
	const options = {
		method: 'PUT',
		body,
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Employees`, options);
	if (!response.ok) {
		return Promise.resolve(undefined);
	}
	return response.json();
}

export async function postEmployeeDto(data: any): Promise<EmployeeDto | undefined> {
	if (!data) {
		return Promise.resolve(undefined);
	}
	const body = JSON.stringify(data);
	const headers = {
		Authorization: 'Bearer <auth_value>',
		'Content-Type': 'application/json; charset=utf-8'
	};
	const options = {
		method: 'POST',
		body,
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Employees`, options);
	if (!response.ok) {
		return Promise.resolve(undefined);
	}
	return response.json();
}

export async function deleteEmployeeDto(id: number): Promise<EmployeeDto | undefined> {
	if (!id) {
		return Promise.resolve(undefined);
	}
	const headers = {
		Authorization: 'Bearer <auth_value>'
	};
	const options = {
		method: 'DELETE',
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Employees/${id}`, options);
	if (!response.ok) {
		return Promise.resolve(undefined);
	}
	return response.json();
}

export async function getCustomerDtoList(): Promise<CustomerDto[]> {
	const response = await fetch(`${API_ENDPOINT}/Customers`);
	if (!response.ok) {
		return Promise.resolve([]);
	}
	return response.json();
}

export async function putCustomerDto(data: any): Promise<CustomerDto | undefined> {
	if (!data) {
		return Promise.resolve(undefined);
	}
	const body = JSON.stringify(data);
	const headers = {
		Authorization: 'Bearer <auth_value>',
		'Content-Type': 'application/json; charset=utf-8'
	};
	const options = {
		method: 'PUT',
		body,
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Customers`, options);
	if (!response.ok) {
		return Promise.resolve(undefined);
	}
	return response.json();
}

export async function deleteCustomerDto(id: string): Promise<CustomerDto | undefined> {
	if (!id) {
		return Promise.resolve(undefined);
	}
	const headers = {
		Authorization: 'Bearer <auth_value>'
	};
	const options = {
		method: 'DELETE',
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Customers/${id}`, options);
	if (!response.ok) {
		return Promise.resolve(undefined);
	}
	return response.json();
}

export async function postCustomerDto(data: any): Promise<CustomerDto | undefined> {
	if (!data) {
		return Promise.resolve(undefined);
	}
	const body = JSON.stringify(data);
	const headers = {
		Authorization: 'Bearer <auth_value>',
		'Content-Type': 'application/json; charset=utf-8'
	};
	const options = {
		method: 'POST',
		body,
		headers,
	};
	const response = await fetch(`${API_ENDPOINT}/Customers`, options);
	if (!response.ok) {
		return Promise.resolve(undefined);
	}
	return response.json();
}
