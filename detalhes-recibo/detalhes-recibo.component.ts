import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-recibo',
  templateUrl: './detalhes-recibo.component.html',
  styleUrls: ['./detalhes-recibo.component.scss'],
})
export class DetalhesReciboComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('detalhes-recibo INIT');
  }
}
