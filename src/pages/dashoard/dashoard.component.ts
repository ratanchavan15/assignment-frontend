import { Component, OnInit } from '@angular/core';
import { HttpRequestProvider} from '../../providers/http-request/http-request';
import { RequestMethod } from '@angular/http';
import * as util from 'underscore';


@Component({
  selector: 'app-dashoard',
  templateUrl: './dashoard.component.html',
  styleUrls: ['./dashoard.component.css']
})
export class DashoardComponent implements OnInit {
  moviesList : any = [];
  indexToBeDel : any = [];
  searchTerm: any = '';
  movieFilter: any = { searchTerm: ''};
  constructor(private http : HttpRequestProvider) { }

  ngOnInit() {
    this.http.getRequest(RequestMethod.Get,"/getData",null).subscribe((response) =>{
       if(!util.isEmpty(response)){
          this.moviesList = response;
          console.log(this.moviesList);
       }
      },(err)=>{
      console.log(err);
     })
  }

  selectMovie(movieIndex : string){
    this.indexToBeDel.push(movieIndex);
  }
  add(){
    
  }
  deleteSelectedMovies(){
    this.indexToBeDel.forEach(index => {
      console.log(index);
      this.moviesList.splice(index, 1);
    });
  }

}
