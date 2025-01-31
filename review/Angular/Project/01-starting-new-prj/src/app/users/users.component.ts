import { Component,signal,computed } from '@angular/core';
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
  // selectedUser = DUMMY_USERS[random_index];
  selectedUser = signal(DUMMY_USERS[random_index]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);


  // get imagePath(){
  //   return 'assets/users/' + this.selectedUser().avatar
  // }

  onSelectUser(  ){
    console.log('Clicked')
    this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random()*DUMMY_USERS.length)]) 
    // this.selectedUser = DUMMY_USERS[Math.floor(Math.random()*DUMMY_USERS.length)];
  }
}
