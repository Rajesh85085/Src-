import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'crm';
  a=true;
  successmsg=true;
  isAdmin=false;
  contacts=[
    {
      'fname':'Naga', 'lname':'M','id':1234},
      {'fname':'Tej', 'lname':'R','id':5678},
      { 'fname':'Surya', 'lname':'F','id':9982     }, 
      { 'fname':'Vijay', 'lname':'S','id':1212     },
      { 'fname':'Ajith', 'lname':'K','id':1548     },
      { 'fname':'Ranjith', 'lname':'S','id':2958     }
  ]
  category = "electronic";
  bgc="Pink"; col="black";
  styleclass= 'c3';
  heading = "Welcome";
  count=10; obj={'name':'Naga', 'age':25}; 
  

  Info="Property Binded Data";
  colo="red";
  imgUrl="../assets/Image.jpg";

  username="Hello welcome";
  word1="abc"; today=Date.now(); jsondata= {name:'naga', age:26}
  word2="ABC"; Curr=125;  percentage=.69;

  user={
    name:'Naga', city:'chennai', citycode:'CHN'
  }
    ngOnInit(){
    console.log("Welcome to Lifecycle");
  }
  sayHello(){
    // alert("Hello");
  }
  highlight(){
    // alert("Highlighted");
  }
  box(){
    // alert("Clicked on the box to type text");
  }
}
