import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  stuobj:object=[];
  yesadded:boolean=false;
  successmsg:string="student added successfully"

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
   
  addstudent(studentdata:NgForm){
    if(studentdata.invalid){
      return ;
    }
    this.stuobj={
      "name":studentdata.value.stuname,
      "email":studentdata.value.stuemail,
      "phone":studentdata.value.stuphone
    }
    this.http.post(`http://localhost:4444/students`,this.stuobj).subscribe(student=>{
    this.yesadded=true;
    this.router.navigate(['/']);
    });
  }
}
