import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  id:number;
  students:any=[];
  exist:boolean=false;
  studentmatcheddata:object={};
  updatestudentobj:object={};
  constructor(private http:HttpClient,private currentroute:ActivatedRoute,private router:Router) { }
  updatestudent(editstudentfrm:NgForm){
    if(editstudentfrm.invalid){
      return;
    }
    this.updatestudentobj={
      "name":editstudentfrm.value.stuname,
      "email":editstudentfrm.value.stuemail,
      "phone":editstudentfrm.value.stuphone
    }
    const url=`${'http://localhost:4444/students/'}/${this.id}`
    this.http.put(url,this.updatestudentobj).subscribe(()=>{
      this.router.navigate(['/']);
    })

  }
  ngOnInit() {

    this.currentroute.params.subscribe(params=>{
      this.id= +params['id']
    });
    this.http.get(`http://localhost:4444/students/`).subscribe((displaystudents)=>{
    this.students=displaystudents;
    for(var i=0;i<this.students.length;i++){
      if(parseInt(this.students[i].id)===this.id){
        this.exist=true;
        this.studentmatcheddata=this.students[i];
        break;
      }else{
        this.exist=false;
      }
    }
    });
  }

}
