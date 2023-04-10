import { Injectable } from '@angular/core';
import { IArticoli } from 'src/app/models/Articoli';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {

  articoli : IArticoli[] = [
    {codart : '014600301', descrizione : 'BARILLA FARINA 1 KG', um : 'PZ', pzcart : 24, peso : 1, prezzo : 1.09, attivo : true, data: new Date(),imageUrl: 'assets/images/prodotti/barilla.jpg'},
    {codart : "013500121", descrizione : "BARILLA PASTA GR.500 N.70 1/2 PENNE", um : "PZ", pzcart : 30, peso : 0.5, prezzo : 1.3, attivo : true, data: new Date(),imageUrl: 'assets/images/prodotti/penne.jpg'},
    {codart : "007686402", descrizione : "FINDUS FIOR DI NASELLO 300 GR", um : "PZ", pzcart : 8, peso : 0.3, prezzo : 6.46, attivo : true, data: new Date(),imageUrl: 'assets/images/prodotti/findus.jpg'},
    {codart : "057549001", descrizione : "FINDUS CROCCOLE 400 GR", um : "PZ", pzcart : 12, peso : 0.4, prezzo : 5.97, attivo : true, data: new Date(),imageUrl: 'assets/images/prodotti/croccole.jpg'}
  ]
  constructor() { }
  //ci ritorna l'array con tutti gli articoli
  getArticoli = () : IArticoli[] => this.articoli;

  //ci torna l'articolo passando il codice come argom
  getArticoliByCode = (codart : string) : IArticoli => {
    let index = this.articoli.findIndex(articoli => articoli.codart === codart);
    return this.articoli[index];
  }
}
