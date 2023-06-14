export class AppareilService{

  appareils = [
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
