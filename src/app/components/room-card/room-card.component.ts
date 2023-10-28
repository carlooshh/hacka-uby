import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {
  constructor() {}

  @Input() name!: string;
  @Input() email!: string;
  @Input() createdAt!: string;
  @Input() details!: string;
  @Input() tags!: { name: string }[];

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
    const difference = 1;
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
