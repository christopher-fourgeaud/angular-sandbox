import { Component, OnInit } from '@angular/core';
import { NameService } from '../services/name/name.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  names = [];
  name : string;
  id : number;

  constructor(public NameService : NameService) {

  }

  checkName() {
    this.name = this.NameService.getName(this.id).name;
  }


  ngOnInit() {
    this.names = this.NameService.getNames();
  }

}
