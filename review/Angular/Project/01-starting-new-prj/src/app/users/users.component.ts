import { Component,signal,computed,Input,input,Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const random_index = Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input({required:true}) id!:string ;
  @Input({required:true}) avatar!:string ;
  @Input({required:true}) name!:string ;
  @Output() select = new EventEmitter();

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(  ){
     this.select.emit(this.id); // pass id to parent componentng
    // this.selectedUser = DUMMY_USERS[Math.floor(Math.random()*DUMMY_USERS.length)];
  }
}
