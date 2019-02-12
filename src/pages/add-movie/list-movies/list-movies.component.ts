import { Component, OnInit } from '@angular/core';
import { RequestMethod } from '@angular/http';
import * as util from 'underscore';
import { HttpRequestProvider } from '../../../providers/http-request/http-request';
@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  constructor(private http : HttpRequestProvider) { }
  moviesDataList;
  ngOnInit() {
    this.http.getRequest(RequestMethod.Get,"/getData",null).subscribe((response) =>{
      if(!util.isEmpty(response)){
         this.moviesDataList = response;
         console.log(this.moviesDataList);
      }
     },(err)=>{
     console.log(err);
    })
  }
  filterTitle = true;
  isEmpty(value){
  //  return underscore.isEmpty(value);
  return false;
  }
  sortList(unsortedArray, column, filter, isNumber): any {
    var sortedArray: any[] = unsortedArray.sort((obj1, obj2) => {
      if (!this.isEmpty(obj1[column]) && this.isEmpty(obj2[column])){
         return 1;
      }
      if (this.isEmpty(obj1[column]) && !this.isEmpty(obj2[column])){
           return -1;
      }
      return (!isNumber ? ((obj1[column] >= obj2[column]) ? 1 : -1 ): ((Number(obj1[column]) >= Number(obj2[column])) ? 1 : -1 ));
    });
  return filter? sortedArray: sortedArray.reverse();
   }
   filterColumn(column, filter, isNumber){
    this.moviesDataList = Object.assign(this.moviesDataList, this.sortList(this.moviesDataList, column, filter, isNumber));
   }

   getDetails(row: any) {
    // console.log(row);
    // const closeAction = this._dialogBox.open(ShowInfoDialogComponent, {
    //   width: "99%",
    //   height: "100vh",
    //   data: row
    // });
}
}

