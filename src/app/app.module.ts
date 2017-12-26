import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserFormComponent } from './userform/userform.component';
import { UserListComponent } from './user-list/user-list.component';
import { ModalModule } from 'ngx-bootstrap';

import { Store } from 'redux';
import { StateService } from './state.service';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [StateService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
