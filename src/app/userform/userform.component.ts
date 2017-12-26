import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.less']
})
export class UserFormComponent {
  private email:string;
  private firstname:string;
  private lastname:string;
  private birthdate:string;

  @Input() actionName: string = 'Submit';
  @Input() panelTitle: string = 'User';
  @Output() submitted = new EventEmitter<User>();

  @Input()
  set user(value:User){
    if(!value){
      return;
    }

    this.email = value.email;
    this.firstname = value.firstname;
    this.lastname = value.lastname;
    this.birthdate = value.birthdate.toISOString().substr(0, 10);
  }

  private submit(){

    this.submitted.emit(new User(this.email, this.firstname, this.lastname, new Date(this.birthdate)));
  }
}
