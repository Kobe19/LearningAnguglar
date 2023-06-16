import {Component, OnInit} from '@angular/core';
import {AppareilService} from "../service/appareil.service";
import {Subscription} from "rxjs";

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
  appareilSuscription: Subscription;
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 9000
    );
  }

  ngOnInit(): void {
    //this.appareils = this.appareilService.appareils;
    this.appareilSuscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    //emmettre les appareils
    this.appareilService.emitAppareilSubject();
  }


  onAllumer(){
    this.appareilService.switchOnAll();
  }

  onEteindre(){
    this.appareilService.switchOffAll();
  }

  onSave(){
    this.appareilService.saveAppareilsToServeur();
  }
}
