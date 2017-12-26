import { Component } from '@angular/core';
import { User } from './user';
import { StateService, State } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  private users:Array<User>;
  private userBeingEdited:User;
  private userBeingRemoved:User;

  constructor(private readonly state:StateService){
    state.subscribe(this.update.bind(this));  
    this.update(state.state);
  }

  private update(s:State){
    this.users = s.users;
    this.userBeingEdited = null;
    this.userBeingRemoved = null;
  }

  private editUser(user:User){
    this.userBeingEdited = user;
  }

  private removeUser(user:User){
    this.userBeingRemoved = user;
  }

  private updateUser(user:User){
    this.state.updateUser(new User(
      user.email, 
      user.firstname, 
      user.lastname, 
      user.birthdate, 
      this.userBeingEdited.id
    ));
  }
}
