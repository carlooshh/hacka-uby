import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ManagerSolutionsService {
  constructor(private readonly http: HttpClient) {}

  async countStatus(filter:any,status:any): Promise<any> {
    return 4;
    // let params = new HttpParams();
    // if(status || status == TransactionChatRoomStatusByConsultantEnum.toDo){
    //   params = params.set('status', status);
    // }
    // if(filter.value.consultant){
    //   params = params.set('consultant', filter.value.consultant);
    // }
    // if(filter.value.initialDate){
    //   params = params.set('initialDate', filter.value.initialDate);
    // }
    // if(filter.value.finalDate){
    //   params = params.set('finalDate', filter.value.finalDate);
    // }
    // if(filter.value.isForcedRoom){
    //   params = params.set('isForcedRoom', filter.value.isForcedRoom);
    // }
    // if(filter.value.productControl){
    //   params = params.set('productControl', filter.value.productControl);
    // }
    // if(filter.value.transactionTypeControl){
    //   params = params.set('transactionTypeControl', filter.value.transactionTypeControl);
    // }
    // return this.http.get(`${API_BACK4_NEW_ADMIN}transaction-chat-room/count-all`,{ params: params }).toPromise();
  }
  async searchStatus(filter:any,status:any,page:any): Promise<any> {
    return true;
    // let params = new HttpParams();
    // if(status || status == TransactionChatRoomStatusByConsultantEnum.toDo){
    //   params = params.set('status', status);
    // }
    // if(filter.value.consultant){
    //   params = params.set('consultant', filter.value.consultant);
    // }
    // if(filter.value.initialDate){
    //   params = params.set('initialDate', filter.value.initialDate);
    // }
    // if(filter.value.finalDate){
    //   params = params.set('finalDate', filter.value.finalDate);
    // }
    // if(filter.value.isForcedRoom){
    //   params = params.set('isForcedRoom', filter.value.isForcedRoom);
    // }
    // if(filter.value.productControl){
    //   params = params.set('productControl', filter.value.productControl);
    // }
    // if(filter.value.transactionTypeControl){
    //   params = params.set('transactionTypeControl', filter.value.transactionTypeControl);
    // }
    // page = page-1;
    // params = params.set('page',page);
    // return this.http.get(`${API_BACK4_NEW_ADMIN}transaction-chat-room`,{ params: params }).toPromise();
  }

}
