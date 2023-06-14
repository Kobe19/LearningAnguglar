import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  secondes: number;
  counterSubscription: Subscription;
  constructor() {
  }
  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe({
      next: (value: number) => {
        this.secondes = value;
      },
      error: (error: any) => {
        console.log('Une erreur vient de se produire');
      },
      complete: () => {
        console.log("observable completé !");
      }
    });
  }

  ngOnDestroy(): void {
    //detruit la subscription à l'observable et evite tout les problèmes de comportement infini
    this.counterSubscription.unsubscribe();
  }

}
