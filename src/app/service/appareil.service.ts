import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AppareilService{

  appareilSubject = new Subject<any[]>();
  private appareils = [
    {
      id: 1,
      name: 'Television',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'PS5',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  constructor(private httpClient: HttpClient) {
  }

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }
  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  switchOnAll(){
    for(let app of this.appareils){
      app.status = 'allumé'
    }
    this.emitAppareilSubject();
  }

  switchOffAll(){
    for(let app of this.appareils){
      app.status = 'éteint'
    }
    this.emitAppareilSubject();
  }

  SwitchOnOne(index: number){
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }

  SwitchOffOne(index: number){
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1 ;

    //Mettre la liste à jour
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilsToServeur(){
    this.httpClient
      .put('https://learningangularhttpclientdemo-default-rtdb.europe-west1.firebasedatabase.app/appareils.json', this.appareils)
      .subscribe({
        next: () => {
          console.log('Enregistrement terminé !');
        },
        error: (error) => {
          console.log('Erreur de Sauvegarde !' + error);
        }
  })
  }
}
