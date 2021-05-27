import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Task } from '../models/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAll(){
    let url = environment.URL_API + "/task"
    return this.http.get(url, {headers:{'Content-Type':'application/json'}})
  }

  getById(id: Number){
    let url = environment.URL_API + "/task/" + id
    return this.http.get(url, {headers:{'Content-Type':'application/json'}})
  }

  save(task: Task){
    let url = environment.URL_API + "/task"
    return this.http.post(url, task, {headers:{'Content-Type':'application/json'}})
  }

  update(id: Number, task: Task){
    let url = environment.URL_API + "/task/" + id
    return this.http.put(url, task, {headers:{'Content-Type':'application/json'}})
  }


  delete(id: Number){
    return this.http.delete(environment.URL_API + "/task/" + id, {headers:{'Content-Type':'application/json'}})
  }
}
