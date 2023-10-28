import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-solutions',
  templateUrl: './manager-solutions.component.html',
  styleUrls: ['./manager-solutions.component.css']
})

export class ManagerSolutionsComponent {

  statusByConsultant=0
  purchaseFreight=0
  saleFreight=20.5
  productId=22.5
  quantity=51

  items = [{
    statusByConsultant:0,
    purchaseFreight:0,
    saleFreight:20.5,
    productId:22.5,
    quantity:51,
  },
  {
    statusByConsultant:0,
    purchaseFreight:0,
    saleFreight:20.5,
    productId:22.5,
    quantity:51,
  },
  {
    statusByConsultant:0,
    purchaseFreight:0,
    saleFreight:20.5,
    productId:22.5,
    quantity:51,
  },]
}
