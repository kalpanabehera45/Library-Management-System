import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path:'insert',component:InsertComponent},
  {path:'update',component:UpdateComponent},
  {path:'delete',component:DeleteComponent},
  {path:'view',component:ViewComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
