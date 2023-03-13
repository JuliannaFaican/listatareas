import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 

  tasks:{title:string;completed:boolean;}[]=
  [
    {title:"Tender la cama",completed:false},
    {title:"",completed:false},
    {title:"",completed:false}
  ]
  newTask='';

  addTask(){
    if(this.newTask.trim().length === 0){  //triple igual significa exactamente
      return;
    }
    this.tasks.push ({title: this.newTask,completed:false});
    this.newTask='';
  }

  deleteTask(task: {title: string; completed: boolean; }){
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index,1);
  }

  getProgress() {
    const totalTask = this.tasks.length;
    const completedTask = this.tasks.filter(task => task.completed).length;
    return completedTask / totalTask;
  }
}