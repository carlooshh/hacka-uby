import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  @Input() purchaseInitialBid!: string;
  @Input() saleInitialBid!: string;
  @Input() product!: string;
  @Input() modality!: string;
  @Input() consultant!: string;
  @Input() city!: string;
  @Input() state!: string;
  @Input() date!: string;
  @Input() roomId!: string;
  statusByConsultant: number  =0;
  purchaseFreight: number  =21.50;
  saleFreight: number  = 23.50;
  productId: number  =51;
  quantity: number =10 ;

  colorEnum = {
    quente: 1,
    frio: 2,
    morno: 3,
  };
  temp: number = 0;

  async ngOnInit() {
    this.temp = await this.calculateTemperature();
  }
  changeSituation() {
    console.log('alterar situação');
  }

  calculateTemperature() {
    const difference = this.saleFreight - this.purchaseFreight;
    if (difference < 1) {
      return this.colorEnum.quente;
    } else if (difference >= 1 && difference <= 3) {
      return this.colorEnum.morno;
    } else
      return this.colorEnum.frio;
  }

  searchList()  {
    console.log('details');
  }
}
