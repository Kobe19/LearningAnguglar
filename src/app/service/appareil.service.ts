export class AppareilService{

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

  switchOnAll(){
    for(let app of this.appareils){
      app.status = 'allumé'
    }
  }

  switchOffAll(){
    for(let app of this.appareils){
      app.status = 'éteint'
    }
  }

  SwitchOnOne(index: number){
    this.appareils[index].status = 'allumé';
  }

  SwitchOffOne(index: number){
    this.appareils[index].status = 'éteint';
  }
}
