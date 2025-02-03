import { Component,signal,computed,Input,input,Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import   { User } from '../users/users.model';
import { CardComponent } from "../shared/card/card.component";

const random_index = Math.floor(Math.random()*DUMMY_USERS.length);

//type  User = {id:string, name:string, avatar:string};


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  // @Input({required:true}) id!:string ;
  // @Input({required:true}) avatar!:string ;
  // @Input({required:true}) name!:string ;
  @Input({required:true}) user! :  User;
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(  ){
     this.select.emit(this.user.id); // pass id to parent componentng
    // this.selectedUser = DUMMY_USERS[Math.floor(Math.random()*DUMMY_USERS.length)];
  }
}
