import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.scss']
})
export class MonPremierComponent {
  @Output() title = 'Je communique depuis le composant mon premier';
}
