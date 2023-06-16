import {Component, OnInit} from '@angular/core';
import {User} from "../models/User.model";
import {Subscription} from "rxjs";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{

  users: User[];
  userSubscription: Subscription;


  constructor(private userService: UserService, private route: Router) {

  }

  ngOnInit(): void {
    this.userSubscription = this.userService.UserSubject.subscribe(
      (userSubject: any[]) => {
        this.users = userSubject;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
}
