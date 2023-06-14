import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from "../service/appareil.service";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName : string;
  @Input() appareilStatus : string;
  @Input() indexOfAppareil : number;

  constructor(private appareilService: AppareilService) {
  }
  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitchOnOne(){
    this.appareilService.SwitchOnOne(this.indexOfAppareil);
  }

  onSwitchOffOne(){
    this.appareilService.SwitchOffOne(this.indexOfAppareil);
  }

}
