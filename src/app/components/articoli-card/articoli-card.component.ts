import { Component, Input, OnInit } from '@angular/core';
import { IArticoli } from 'src/app/models/Articoli';

@Component({
  selector: 'app-articoli-card',
  templateUrl: './articoli-card.component.html',
  styleUrls: ['./articoli-card.component.css']
})
export class ArticoliCardComponent implements OnInit {

  @Input()
 articolo: IArticoli = {
  codart : '',
  descrizione : '',
  um : '',
  pzcart : 0,
  peso : 0,
  prezzo : 0,
  attivo : true,
  data : new Date(),
  imageUrl : ''
 }

  constructor() { }

  ngOnInit(): void {
  }

}
