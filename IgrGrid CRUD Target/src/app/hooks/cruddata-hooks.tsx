import { useCallback, useEffect, useState } from 'react';
import { EmployeeDto } from '../models/CRUDData/employee-dto';
import { CustomerDto } from '../models/CRUDData/customer-dto';
import { getCustomerDtoList, getEmployeeDtoList } from '../services/cruddata';

export const useGetEmployeeDtoList = () => {
	const [employeeDto, setEmployeeDto] = useState<EmployeeDto[]>([]);

	const requestEmployeeDto = useCallback(() => {
		let ignore = false;
		getEmployeeDtoList()
			.then((data) => {
				if (!ignore) {
					setEmployeeDto(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, []);

	useEffect(() => {
		requestEmployeeDto();
	}, [requestEmployeeDto]);

	return { requestCRUDDataEmployeeDto: requestEmployeeDto, cRUDDataEmployeeDto: employeeDto, setCRUDDataEmployeeDto: setEmployeeDto};
}

export const useGetCustomerDtoList = () => {
	const [customerDto, setCustomerDto] = useState<CustomerDto[]>([]);

	const requestCustomerDto = useCallback(() => {
		let ignore = false;
		getCustomerDtoList()
			.then((data) => {
				if (!ignore) {
					setCustomerDto(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, []);

	useEffect(() => {
		requestCustomerDto();
	}, [requestCustomerDto]);

	return { requestCRUDDataCustomerDto: requestCustomerDto, cRUDDataCustomerDto: customerDto, setCRUDDataCustomerDto: setCustomerDto};
}
