import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { IArticoli } from 'src/app/models/Articoli';
import { ArticoliService } from 'src/services/articoli.service';

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent implements OnInit {

  constructor(private articoliService : ArticoliService) { }

  articoli$ : IArticoli[] = [];
  //mounted
  ngOnInit(): void {
    this.articoli$ = this.articoliService.getArticoli();
    console.log(this.articoli$)
  }

}
