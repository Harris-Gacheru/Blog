import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CreateblogComponent } from './pages/createblog/createblog.component';
import { EditblogComponent } from './pages/editblog/editblog.component';
import { ViewblogComponent } from './pages/viewblog/viewblog.component';

const routes: Routes = [
  {path:'', component: BlogsComponent},
  {path:'v/:id', component: ViewblogComponent},
  {path:'create', component: CreateblogComponent},
  {path: 'edit/:id', component: EditblogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
