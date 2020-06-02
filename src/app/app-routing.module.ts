import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogAboutComponent } from './blog-about/blog-about.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';


const routes: Routes = [
  {path:'home',component:BlogHomeComponent},
  {path:'about',component:BlogAboutComponent},
  {path:'create',component:BlogCreateComponent},
  {path:'blog/:blogId',component:BlogViewComponent},
  {path:'editlog/:blogId',component:BlogEditComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
