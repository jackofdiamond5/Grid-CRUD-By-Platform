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
    this.northwindDataService.addEmployee(args.data).subscribe(res => {
      // item added
    });
  }

  public customerEdited(args: IGridEditDoneEventArgs) {
    if (!args.isAddRow) {
      this.northwindDataService.updateEmployee(args.rowData).subscribe(res => {
        // item edited
      });
    }
  }

  public customerDeleted(args: IRowDataEventArgs) {
    this.northwindDataService.deleteEmployee(args.data['customerID']).subscribe(res => {
      // item deleted
    });
  }

  public employeeAdded(args: IRowDataEventArgs) {
    this.northwindDataService.addEmployee(args.data).subscribe(res => {
      // item added
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
    this.northwindDataService.deleteEmployee(args.data['employeeID']).subscribe(res => {
      // item deleted
    });
  }
}
