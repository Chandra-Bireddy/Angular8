import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks:Task[];

  constructor() { 
    this.tasks=[
      {taskID:101,firstName:"Chandra",lastName:"Bireddy",dob:new Date("1998-03-05"),mobileNumber:"9955650397",alternateMobileNumber:"19703606830",mailId:"cbrh1@gmail.com",organization:"Shade"},
      {taskID:102,firstName:"Hari",lastName:"Bireddy",dob:new Date("1997-03-05"),mobileNumber:"9951546397",alternateMobileNumber:"29703606830",mailId:"cbrh2@gmail.com",organization:"Shade1"},
      {taskID:103,firstName:"Lucky",lastName:"Isani",dob:new Date("1996-03-05"),mobileNumber:"9951555397",alternateMobileNumber:"39703606830",mailId:"cbrh3@gmail.com",organization:"Shade3"}
    ];
   }
   getAll():Task[]{
     return this.tasks;
   }
   get(id:number){
     return this.tasks.find((t)=>(t.taskID==id));
   }
   add(task:Task){
     this.tasks.push(task);
   }
   update(task:Task){
    let index=this.tasks.findIndex((t)=>(t.taskID===task.taskID));
    if(index>-1){
      this.tasks[index]=task;
    }
   }
   delete(id:number){
     let index=this.tasks.findIndex((task)=>(task.taskID===id));
     if(index>-1){
      this.tasks.splice(index,1);
    }
   }
  }

