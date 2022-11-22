import { Component, OnInit } from '@angular/core';
import { IGridEditDoneEventArgs, IRowDataEventArgs } from '@infragistics/igniteui-angular';
import { NorthwindDataService } from '../services/northwind-data.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public northwindEmployees: any = null;
  public northwindCustomers: any = null;

  constructor(
    private northwindDataService: NorthwindDataService,
  ) { }

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindDataService.getEmployeeData().subscribe(data => this.northwindEmployees = data);
    this.northwindDataService.getCustomerData().subscribe(data => this.northwindCustomers = data);
  }

  public customerAdded(args: IRowDataEventArgs) {
    this.northwindDataService.addCustomer(args.data).subscribe((res: any) => {
      // item added
      args.data.customerId = res.customerId
    });
  }

  public customerEdited(args: IGridEditDoneEventArgs) {
    if (!args.isAddRow) {
      this.northwindDataService.updateCustomer(args.rowData).subscribe(res => {
        // item edited
      });
    }
  }

  public customerDeleted(args: IRowDataEventArgs) {
    this.northwindDataService.deleteCustomer(args.data['customerId']).subscribe(res => {
      // item deleted
    });
  }

  public employeeAdded(args: IRowDataEventArgs) {
    this.northwindDataService.addEmployee(args.data).subscribe((res: any) => {
      // item added
      args.data.employeeId = res.employeeId
    });
  }

  public employeeEdited(args: IGridEditDoneEventArgs) {
    if (!args.isAddRow) {
      this.northwindDataService.updateEmployee(args.rowData).subscribe(res => {
        // item edited
      });
    }
  }

  public employeeDeleted(args: IRowDataEventArgs) {
    this.northwindDataService.deleteEmployee(args.data['employeeId']).subscribe(res => {
      // item deleted
    });
  }
}
