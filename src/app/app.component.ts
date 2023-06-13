import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

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
  constructor() {
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
