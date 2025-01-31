import { Component,signal,computed,Input } from '@angular/core';
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
  @Input({required:true}) avatar!:string ;
  @Input({required:true}) name!:string ;

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(  ){
     
    // this.selectedUser = DUMMY_USERS[Math.floor(Math.random()*DUMMY_USERS.length)];
  }
}
