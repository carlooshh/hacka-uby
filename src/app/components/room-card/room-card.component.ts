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

  temp: number = 0;

  async ngOnInit() {
  }
  changeSituation() {
    console.log('alterar situação');
  }

  searchList()  {
    console.log('details');
  }
}
