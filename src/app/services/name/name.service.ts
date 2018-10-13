import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor() { }

  getNames(){
    return ['titi','toto','tata'];
  }

  getName(id : number){
    if (id === 1) {
      return {
        "id" : 1,
        "name" : "titi"
      }
    }else if( id === 2){
      return {
        "id": 2,
        "name": "toto"
      }
    }else if ( id === 3 ){
      return {
        "id": 3,
        "name": "tata"
      }
    }else{
      return {
        "error" : "not found"
      }
    }
  }
}
