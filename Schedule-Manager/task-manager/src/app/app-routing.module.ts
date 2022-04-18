import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { TaskViewComponent } from './taskmanager/taskmanager.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { LoginPageComponent } from './login-page/login-page.component'
import { SignupPageComponent } from './signup-page/signup-page.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [
  {path: '', redirectTo: 'lists', pathMatch: 'full'},
  {path: 'addevent', component: AddEventComponent},
  {path: 'login', component: LoginPageComponent },
  {path: 'signup', component: SignupPageComponent},
  {path: 'lists', component: TaskViewComponent},
  {path: 'lists/:listId', component: TaskViewComponent},
  {path: 'lists/:listId/addtask', component: AddTaskComponent},
  {path: 'lists/:listId/edit-task', component: AddTaskComponent},
  {path: 'edit-list/:listId', component: EditListComponent},
  {path: 'edit-task', component: EditTaskComponent},
  {path: 'lists/:listId/edit-task/:taskId', component: AddTaskComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
