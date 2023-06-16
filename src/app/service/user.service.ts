import {User} from "../models/User.model";
import {Subject} from "rxjs";

export class UserService {
  private users: User[] = [
    {
      firstName: 'Daniel Guirol',
      lastName: 'FOGUE TSAKOU',
      email: 'fguirol@gmail.com',
      drinkPreference: 'Coke',
      hobbies: [
        'coder', 'guitare', 'piano'
      ]
    }
  ];
  UserSubject = new Subject<User[]>();

  emitUsers(){
    this.UserSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
