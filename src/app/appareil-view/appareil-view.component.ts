import {Component, OnInit} from '@angular/core';
import {AppareilService} from "../service/appareil.service";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit{
  isAuth = false;

  //Pipe Date
  //lastUpdate = new Date();

  lastUpdate = new Promise(
    (resolve) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  )
  appareils: any[];
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 9000
    );
  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }


  onAllumer(){
    this.appareilService.switchOnAll();
  }

  onEteindre(){
    this.appareilService.switchOffAll();
  }
}
