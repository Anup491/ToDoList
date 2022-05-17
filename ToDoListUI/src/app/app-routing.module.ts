import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'tasks',
  component: TasksComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
