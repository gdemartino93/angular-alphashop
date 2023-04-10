import { Component, Input, OnInit, Output } from '@angular/core';
import { IArticoli } from 'src/app/models/Articoli';
import { EventEmitter } from 'stream';

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

 @Output()
  delete = new EventEmitter();

 @Output()
  edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
