import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user;

  constructor(public UserService : UserService) { }

  ngOnInit() {
    this.UserService.getUser().subscribe(
      data => {
        // traitement de data
        this.user = data["results"][0];
        console.log(this.user);
      },
      error => {
        // traitement de l'erreur
        console.log(error);
      }
    )

  }

}
