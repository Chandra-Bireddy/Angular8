import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Task} from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  private task:Task; 
  constructor(
    private taskServ:TaskService,
    private routeData:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routeData.params.subscribe(
      (params)=>{
        let taskid=params['id'];
        if(taskid){
          this.task=this.taskServ.get(taskid);
        }
      }
    )
  }

}
