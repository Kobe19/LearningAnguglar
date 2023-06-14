import { Component } from '@angular/core';
import {AppareilService} from "./service/appareil.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  //Pipe Date
  //lastUpdate = new Date();

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  )
  appareils = [
    {
      name: 'Television',
      status: 'éteint'
    },
    {
      name: 'PS5',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 9000
    );
  }

  onAllumer(){
    console.log('on allume tout ! ')
  }
}
