import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnPushComponent } from './on-push/on-push.component';
import { ImpurePipePipe } from './impure-pipe.pipe';
import { PurePipePipe } from './pure-pipe.pipe';
import { RunOutsideAngularPipe } from './run-outside-angular.pipe';
import { RunOutsideAngularComponent } from './run-outside-angular/run-outside-angular.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { DefaultComponent } from './default/default.component';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [
    AppComponent,
    OnPushComponent,
    ImpurePipePipe,
    PurePipePipe,
    RunOutsideAngularPipe,
    RunOutsideAngularComponent,
    DefaultComponent,
    ParentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
