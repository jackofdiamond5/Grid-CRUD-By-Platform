import { useGetCustomerDtoList, useGetEmployeeDtoList } from '../hooks/cruddata-hooks';
import { deleteCustomerDto, deleteEmployeeDto, postCustomerDto, postEmployeeDto, putCustomerDto, putEmployeeDto } from '../services/cruddata';
import { IgrActionStrip, IgrActionStripModule, IgrColumn, IgrGrid, IgrGridBaseDirective, IgrGridEditDoneEventArgs, IgrGridEditingActions, IgrGridModule, IgrGridPinningActions, IgrRowDataEventArgs } from 'igniteui-react-grids';
import 'igniteui-react-grids/grids';
import styles from './master-view.module.css';
import createClassTransformer from '../style-utils';

IgrActionStripModule.register();
IgrGridModule.register();

export default function MasterView() {
  const classes = createClassTransformer(styles);
  const { requestCRUDDataEmployeeDto, cRUDDataEmployeeDto } = useGetEmployeeDtoList();
  const { requestCRUDDataCustomerDto, cRUDDataCustomerDto } = useGetCustomerDtoList();

  function employeesRowEditDone(_s: IgrGridBaseDirective, args: IgrGridEditDoneEventArgs) {
    if (!args.detail.isAddRow) {
      putEmployeeDto(args.detail.rowData).then((res) => {
        if (res) {
          requestCRUDDataEmployeeDto();
        } else {
          // TODO: handle error here!
        }
      });
    }
  }

  function employeesRowAdded(_s: IgrGridBaseDirective, args: IgrRowDataEventArgs) {
    postEmployeeDto(args.detail.data).then((res) => {
      if (res) {
        requestCRUDDataEmployeeDto();
      } else {
        // TODO: handle error here!
      }
    });
  }

  function employeesRowDeleted(_s: IgrGridBaseDirective, args: IgrRowDataEventArgs) {
    deleteEmployeeDto(args.detail.primaryKey).then((res) => {
      if (res) {
        requestCRUDDataEmployeeDto();
      } else {
        // TODO: handle error here!
      }
    });
  }

  function customersRowEditDone(_s: IgrGridBaseDirective, args: IgrGridEditDoneEventArgs) {
    if (!args.detail.isAddRow) {
      putCustomerDto(args.detail.rowData).then((res) => {
        if (res) {
          requestCRUDDataCustomerDto();
        } else {
          // TODO: handle error here!
        }
      });
    }
  }

  function customersRowDeleted(_s: IgrGridBaseDirective, args: IgrRowDataEventArgs) {
    deleteCustomerDto(args.detail.primaryKey).then((res) => {
      if (res) {
        requestCRUDDataCustomerDto();
      } else {
        // TODO: handle error here!
      }
    });
  }

  function customersRowAdded(_s: IgrGridBaseDirective, args: IgrRowDataEventArgs) {
    postCustomerDto(args.detail.data).then((res) => {
      if (res) {
        requestCRUDDataCustomerDto();
      } else {
        // TODO: handle error here!
      }
    });
  }

  return (
    <>
      <div className={classes("row-layout master-view-container")}>
        <IgrGrid data={cRUDDataEmployeeDto} primaryKey="employeeId" displayDensity="cosy" rowEditable="true" allowFiltering="true" filterMode="excelStyleFilter" rowEditDone={employeesRowEditDone} rowAdded={employeesRowAdded} rowDeleted={employeesRowDeleted} className={classes("ig-typography ig-scrollbar grid")}>
          <IgrColumn field="employeeId" dataType="number" header="employeeId" selectable="false"></IgrColumn>
          <IgrColumn field="lastName" dataType="string" header="lastName" selectable="false"></IgrColumn>
          <IgrColumn field="firstName" dataType="string" header="firstName" selectable="false"></IgrColumn>
          <IgrColumn field="title" dataType="string" header="title" selectable="false"></IgrColumn>
          <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" selectable="false"></IgrColumn>
          <IgrColumn field="birthDate" dataType="date" header="birthDate" selectable="false"></IgrColumn>
          <IgrColumn field="hireDate" dataType="date" header="hireDate" selectable="false"></IgrColumn>
          <IgrColumn field="addressId" dataType="string" header="addressId" selectable="false"></IgrColumn>
          <IgrColumn field="address.street" dataType="string" header="address street" selectable="false"></IgrColumn>
          <IgrColumn field="address.city" dataType="string" header="address city" selectable="false"></IgrColumn>
          <IgrColumn field="address.region" dataType="string" header="address region" selectable="false"></IgrColumn>
          <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" selectable="false"></IgrColumn>
          <IgrColumn field="address.country" dataType="string" header="address country" selectable="false"></IgrColumn>
          <IgrColumn field="address.phone" dataType="string" header="address phone" selectable="false"></IgrColumn>
          <IgrColumn field="notes" dataType="string" header="notes" selectable="false"></IgrColumn>
          <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" selectable="false"></IgrColumn>
          <IgrColumn field="reportsTo" dataType="number" header="reportsTo" selectable="false"></IgrColumn>
          <IgrActionStrip>
            <IgrGridPinningActions></IgrGridPinningActions>
            <IgrGridEditingActions addRow="true"></IgrGridEditingActions>
          </IgrActionStrip>
        </IgrGrid>
        <IgrGrid data={cRUDDataCustomerDto} primaryKey="customerId" displayDensity="cosy" rowEditable="true" allowFiltering="true" filterMode="excelStyleFilter" rowEditDone={customersRowEditDone} rowDeleted={customersRowDeleted} rowAdded={customersRowAdded} className={classes("ig-typography ig-scrollbar grid")}>
          <IgrColumn field="customerId" dataType="string" header="customerId" selectable="false"></IgrColumn>
          <IgrColumn field="companyName" dataType="string" header="companyName" selectable="false"></IgrColumn>
          <IgrColumn field="contactName" dataType="string" header="contactName" selectable="false"></IgrColumn>
          <IgrColumn field="contactTitle" dataType="string" header="contactTitle" selectable="false"></IgrColumn>
          <IgrColumn field="address.street" dataType="string" header="address street" selectable="false"></IgrColumn>
          <IgrColumn field="address.city" dataType="string" header="address city" selectable="false"></IgrColumn>
          <IgrColumn field="address.region" dataType="string" header="address region" selectable="false"></IgrColumn>
          <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" selectable="false"></IgrColumn>
          <IgrColumn field="address.country" dataType="string" header="address country" selectable="false"></IgrColumn>
          <IgrColumn field="address.phone" dataType="string" header="address phone" selectable="false"></IgrColumn>
          <IgrActionStrip>
            <IgrGridPinningActions></IgrGridPinningActions>
            <IgrGridEditingActions addRow="true"></IgrGridEditingActions>
          </IgrActionStrip>
        </IgrGrid>
      </div>
    </>
  );
}
