import { Injectable } from '@angular/core';
import { WebrequestService } from './webrequest.service';
import { Task } from './models/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  constructor(private webreqService: WebrequestService) { }
  
  getLists() {
    return this.webreqService.get('lists');
  }

  getTasks(listId: string) {
    return this.webreqService.get(`lists/${listId}/tasks`);
  }

  createList(title: string) {
    // We want to send a web request to create a list
    return this.webreqService.post('lists', { title });
  }
  
  createTask(title: string, listId: string) {
    // We want to send a web request to create a task
    return this.webreqService.post(`lists/${listId}/tasks`, { title }); 
  }

  updateList(id: string, title: string) {
    // We want to send a web request to update a list
    return this.webreqService.patch(`lists/${id}`, { title });
  }

  updateTask(listId: string, taskId: string, title: string) {
    // We want to send a web request to update a list
    return this.webreqService.patch(`lists/${listId}/tasks/${taskId}`, { title });
  }

  deleteList(id: string) {
    return this.webreqService.delete(`lists/${id}`);
  }

  deleteTask(listId: string, taskId: string) {
    return this.webreqService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  complete(task: Task) {
    return this.webreqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed
    });
  }
}
