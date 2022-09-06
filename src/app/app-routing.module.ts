import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { OnPushComponent } from './on-push/on-push.component';
import { ParentComponent } from './parent/parent.component';
import { RunOutsideAngularComponent } from './run-outside-angular/run-outside-angular.component';

const routes: Routes = [
{
  path:'on-push' , component:OnPushComponent
},
{
  path:'run-o',component:RunOutsideAngularComponent
},
{
  path:'parent',component:ParentComponent
},
{
  path:'default',component:DefaultComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
