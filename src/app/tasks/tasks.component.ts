import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(
    private taskService: TaskService
  ) { }

  tasks: Task[] = []

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks() {
    this.taskService.getAll().subscribe( (data : any) => {
      this.tasks = data
    })
  }

  addTask() {
    let task = new Task()
    task.editMode = true
    this.tasks.push(task)
  }

  saveTask(task: Task) {
    this.saveOrUpdate(task).subscribe( (data : any) => {
      task.editMode = false
      task = data
    })
  }

  saveOrUpdate(task: Task) {
    if(task.id) {
      return this.taskService.update(task.id, task);
    }
    return this.taskService.save(task)
  }
  
  editTask(task: Task) {
    task.editMode = true
  }

  deleteByIndex(index: number) {
    this.tasks.splice(index, 1)
  }

  deleteById(id: Number) {
    this.taskService.delete(id).subscribe(data => {
      this.getTasks()
    })
  }

}
