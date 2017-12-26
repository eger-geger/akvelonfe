import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent {
  @Input() users:Array<User>;
  @Output() onEdit = new EventEmitter<User>();
  @Output() onRemove = new EventEmitter<User>();

  constructor() { }

}
