import {Subject} from "rxjs";

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
}
