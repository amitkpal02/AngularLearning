import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular Tutorial by amit kandpal';
  users:any;
  constructor(private http: HttpClient){


  }
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get('http://localhost:63466/api/values').subscribe(Response=>{
      this.users=Response;
      },error=>{
        console.log(error);
      })
  }
}
