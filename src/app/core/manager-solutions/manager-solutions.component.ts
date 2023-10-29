import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ManagerSolutionsService } from 'src/app/service/manager-solutions.service';
import { StatusEnum } from 'src/shared/enums/status.enum';

@Component({
  selector: 'app-manager-solutions',
  templateUrl: './manager-solutions.component.html',
  styleUrls: ['./manager-solutions.component.css'],
})
export class ManagerSolutionsComponent {
  constructor(
    private readonly managerSolutionsService: ManagerSolutionsService
  ) {}

  currentDate = new Date();
  searchNegotiationsForm = new FormGroup({
    consultant: new FormControl(),
    finalDate: new FormControl(this.currentDate.toISOString().substring(0, 10)),
    initialDate: new FormControl(),
    productControl: new FormControl(),
    transactionTypeControl: new FormControl(),
  });

  countItemsToDo: number = 3;
  countItemsDoing: number = 0;
  countItemsPending: number = 4;
  countItemsApproved: number = 0;
  countItemsArchived: number = 0;
  itemsToDo = [
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'viado' }, { name: 'zé' }, { name: 'Fernando' }],
    },
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'Fernando' }, { name: 'carlos' }, { name: 'João' }],
    },
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'Fernando' }, { name: 'carlos' }, { name: 'João' }],
    },
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'Fernando' }, { name: 'carlos' }, { name: 'João' }],
    },
  ];
  itemsDoing = [
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'viado' }, { name: 'zé' }, { name: 'Fernando' }],
    },
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'Fernando' }, { name: 'carlos' }, { name: 'João' }],
    },
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'Fernando' }, { name: 'carlos' }, { name: 'João' }],
    },
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'Fernando' }, { name: 'carlos' }, { name: 'João' }],
    },
  ];
  itemsPending = [
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'viado' }, { name: 'zé' }, { name: 'Fernando' }],
    },
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'Fernando' }, { name: 'carlos' }, { name: 'João' }],
    },
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'Fernando' }, { name: 'carlos' }, { name: 'João' }],
    },
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'Fernando' }, { name: 'carlos' }, { name: 'João' }],
    },
  ];
  itemsApproved = [
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'viado' }, { name: 'zé' }, { name: 'Fernando' }],
    },
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'Fernando' }, { name: 'carlos' }, { name: 'João' }],
    },
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'Fernando' }, { name: 'carlos' }, { name: 'João' }],
    },
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'Fernando' }, { name: 'carlos' }, { name: 'João' }],
    },
  ];
  itemsArchived = [
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'viado' }, { name: 'zé' }, { name: 'Fernando' }],
    },
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'Fernando' }, { name: 'carlos' }, { name: 'João' }],
    },
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'Fernando' }, { name: 'carlos' }, { name: 'João' }],
    },
    {
      name: 'Fernando Victor',
      email: 'fernando00sjp@hotmail.com',
      createdAt: '10/10/2023',
      details: [{ name: 'Fernando' }, { name: 'carlos' }, { name: 'João' }],
    },
  ];

  currentPageToDo: number = 1;
  currentPageDoing: number = 1;
  currentPagePositive: number = 1;
  currentPageWrong: number = 1;
  currentPageArchived: number = 1;

  onPageChange(event: any, type: number) {
    switch (type) {
      case StatusEnum.toDo:
        this.searchRoom(type, (this.currentPageToDo = event.pageIndex + 1));
        break;
      case StatusEnum.doing:
        this.searchRoom(type, (this.currentPageDoing = event.pageIndex + 1));
        break;
      case StatusEnum.positive:
        this.searchRoom(type, (this.currentPagePositive = event.pageIndex + 1));
        break;
      case StatusEnum.wrong:
        this.searchRoom(type, (this.currentPageWrong = event.pageIndex + 1));
        break;
      case StatusEnum.archived:
        this.searchRoom(type, (this.currentPageArchived = event.pageIndex + 1));
        break;
    }
  }
  async searchRoom(pipeline: number, page: number) {
    if (pipeline == StatusEnum.toDo) {
      this.countItemsToDo = await this.managerSolutionsService.countStatus(
        this.searchNegotiationsForm,
        StatusEnum.toDo
      );
      this.itemsToDo = await this.managerSolutionsService.searchStatus(
        this.searchNegotiationsForm,
        StatusEnum.toDo,
        page
      );
    }
    if (pipeline == StatusEnum.doing) {
      this.countItemsDoing = await this.managerSolutionsService.countStatus(
        this.searchNegotiationsForm,
        StatusEnum.doing
      );
      this.itemsDoing = await this.managerSolutionsService.searchStatus(
        this.searchNegotiationsForm,
        StatusEnum.doing,
        page
      );
    }
    if (pipeline == StatusEnum.positive) {
      this.countItemsPending = await this.managerSolutionsService.countStatus(
        this.searchNegotiationsForm,
        StatusEnum.positive
      );
      this.itemsPending = await this.managerSolutionsService.searchStatus(
        this.searchNegotiationsForm,
        StatusEnum.positive,
        page
      );
    }
    if (pipeline == StatusEnum.wrong) {
      this.countItemsApproved = await this.managerSolutionsService.countStatus(
        this.searchNegotiationsForm,
        StatusEnum.wrong
      );
      this.itemsApproved = await this.managerSolutionsService.searchStatus(
        this.searchNegotiationsForm,
        StatusEnum.wrong,
        page
      );
    }
    if (pipeline == StatusEnum.archived) {
      this.countItemsArchived = await this.managerSolutionsService.countStatus(
        this.searchNegotiationsForm,
        StatusEnum.archived
      );
      this.itemsArchived = await this.managerSolutionsService.searchStatus(
        this.searchNegotiationsForm,
        StatusEnum.archived,
        page
      );
    }
  }
}
