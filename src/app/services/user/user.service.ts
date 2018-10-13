import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url : string = "https://randomuser.me/api/";

  constructor(private http : HttpClient) { }
  getUser(){
    return this.http.get(this.url);
  }

}
