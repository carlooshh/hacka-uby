import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IdeaService } from 'src/app/services/idea.service';
import { StatusEnum } from 'src/shared/enums/status.enum';

@Component({
  selector: 'app-manager-solutions',
  templateUrl: './manager-solutions.component.html',
  styleUrls: ['./manager-solutions.component.css'],
})
export class ManagerSolutionsComponent implements OnInit {
  constructor(
    private readonly ideaService: IdeaService
  ) {}

  currentDate = new Date();
  searchNegotiationsForm = new FormGroup({
    consultant: new FormControl(),
    finalDate: new FormControl(this.currentDate.toISOString().substring(0, 10)),
    initialDate: new FormControl(),
    productControl: new FormControl(),
    transactionTypeControl: new FormControl(),
  });
  chalenge = 'Acesso a Mercado';

  countItemsToDo: number = 0;
  countItemsDoing: number = 0;
  countItemsDone: number = 0;
  countItemsApproved: number = 0;
  itemsToDo: any[] | undefined;
  itemsDoing: any[] | undefined;
  itemsDone: any[] | undefined;
  itemsApproved: any[] | undefined;

  async ngOnInit() {
    await this.searchRoom(StatusEnum.toDo);
    await this.searchRoom(StatusEnum.doing);
    await this.searchRoom(StatusEnum.approved);
    await this.searchRoom(StatusEnum.done);
  }

  async searchRoom(pipeline: number) {
    if (pipeline == StatusEnum.toDo) {
      const ids = await this.ideaService.getIds(this.chalenge, 'PENDING');
      this.itemsToDo = ids ? [ids] : [];
      this.countItemsToDo = this.itemsToDo[0].length;
      this.itemsToDo = this.itemsToDo[0];
    }
    if (pipeline == StatusEnum.doing) {
      const ids = await this.ideaService.getIds(this.chalenge, 'DOING');
      this.itemsDoing = ids ? [ids] : [];
      this.countItemsDoing = this.itemsDoing[0].length;
      this.itemsDoing = this.itemsDoing[0];
    }
    if (pipeline == StatusEnum.approved) {
      const ids = await this.ideaService.getIds(this.chalenge, 'DONE');
      this.itemsApproved = ids ? [ids] : [];
      this.countItemsApproved = this.itemsApproved[0].length ;
      this.itemsApproved = this.itemsApproved[0];
    }
    if (pipeline == StatusEnum.done) {
      const ids = await this.ideaService.getIds(this.chalenge, 'DONE');
      this.itemsDone = ids ? [ids] : [];
      this.countItemsDone = this.itemsDone[0].length;
      this.itemsDone = this.itemsDone[0];
    }
  }
}
