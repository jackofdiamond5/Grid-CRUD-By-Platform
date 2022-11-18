/* eslint-disable */

import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
import NorthwindService from '../service/northwind-service';
import { IgcDataGridComponent, IgcGridRowEditEndedEventArgs } from '@infragistics/igniteui-webcomponents-grids/public_api';
import { IgcGridComponent, IgcGridEditDoneEventArgs, IgcRowDataEventArgs } from '@infragistics/igniteui-webcomponents-grids/grids';


// IgcActionStripComponent not exported as public api

@customElement('app-master-view')
export default class MasterView extends LitElement {
  private northwindService = new NorthwindService();

  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .grid {
      min-width: 600px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    this.northwindService.getCustomerData().then(data => this.northwindCustomers = data);
    this.northwindService.getEmployeeData().then(data => this.northwindEmployees = data);
  }

  @property()
  private northwindCustomers?: any[];

  @property()
  private northwindEmployees?: any[];

  /* Employees */
  // update
  private onEmployeeEdited(args: CustomEvent<IgcGridEditDoneEventArgs>) {
    if (args.detail.isAddRow) { return; }
    this.northwindService.updateEmployee(args.detail.rowData).then(res => {
      if (!res.ok) {
        console.log(`Failed to update customer with id ${args.detail.rowID}`);
      }
    });
  }

  // create
  private onEmployeeAdded(args: CustomEvent<IgcRowDataEventArgs>) {
    this.northwindService.addEmployee(args.detail.data).then(res => {
      if (!res.ok) {
        console.log(`Failed to add customer with id ${args.detail.data['employeeID']}`);
      }
    });
  }

  // delete
  private onEmployeeDeleted(args: CustomEvent<IgcRowDataEventArgs>) {
    this.northwindService.deleteEmployee(args.detail.data['employeeID']).then(res => {
      if (!res.ok) {
        console.log(`Failed to delete customer with id ${args.detail.data['employeeID']}`);
      }
    });
  }

  /* Customers */
   
  // update
  private onCustomerEdited(args: CustomEvent<IgcGridEditDoneEventArgs>) {
    if (args.detail.isAddRow) { return; }
    this.northwindService.updateCustomer(args.detail.rowData).then(res => {
      if (!res.ok) {
        console.log(`Failed to update customer with id ${args.detail.rowID}`);
      }
    });
  }

  // create
  private onCustomerAdded(args: CustomEvent<IgcRowDataEventArgs>) {
    this.northwindService.addCustomer(args.detail.data).then(res => {
      if (!res.ok) {
        console.log(`Failed to add customer with id ${args.detail.data['customerID']}`);
      }
    });
  }

  // delete
  private onCustomerDeleted(args: CustomEvent<IgcRowDataEventArgs>) {
    this.northwindService.deleteCustomer(args.detail.data['customerID']).then(res => {
      if (!res.ok) {
        console.log(`Failed to delete customer with id ${args.detail.data['customerID']}`);
      }
    });
  }

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/material.css'>
      <igc-grid .data="${this.northwindEmployees}"
        primary-key="employeeID"
        display-density="cosy"
        allow-filtering="true"
        filter-mode="excelStyleFilter"
        class="ig-typography grid"
        row-editable="true"
        @rowEditDone=${this.onEmployeeEdited}
        @rowAdded=${this.onEmployeeAdded}
        @rowDeleted=${this.onEmployeeDeleted}>
        <igc-column field="employeeID" data-type="number" header="employeeID" sortable="true" selectable="false"></igc-column>
        <igc-column field="lastName" data-type="string" header="lastName" sortable="true" selectable="false"></igc-column>
        <igc-column field="firstName" data-type="string" header="firstName" sortable="true" selectable="false"></igc-column>
        <igc-action-strip>
          <igc-grid-editing-actions add-row="true"></igc-grid-editing-actions>
        </igc-action-strip>
      </igc-grid>

      <!-- always put auto-generate=false -->
      <igc-grid id="customers" .data="${this.northwindCustomers}" 
        auto-generate="false"
        primary-key="customerID"
        display-density="cosy"
        allow-filtering="true"
        filter-mode="excelStyleFilter"
        class="ig-typography grid"
        row-editable="true"
        @rowEditDone=${this.onCustomerEdited}
        @rowAdded=${this.onCustomerAdded}
        @rowDeleted=${this.onCustomerDeleted}>
        <igc-column field="customerID" data-type="string" header="customerID" sortable="true" selectable="false"></igc-column>
        <igc-column field="companyName" data-type="string" header="companyName" sortable="true" selectable="false">
        </igc-column>
        <igc-column field="contactName" data-type="string" header="contactName" sortable="true" selectable="false">
        </igc-column>
        <igc-action-strip>
          <igc-grid-editing-actions add-row="true"></igc-grid-editing-actions>
        </igc-action-strip>
      </igc-grid>
    `;
  }
}
