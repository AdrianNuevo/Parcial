import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/clases/contrato';
import { ContratoservicioService } from 'src/app/servicios/contratoservicio.service';

@Component({
  selector: 'app-consultacontrato',
  templateUrl: './consultacontrato.component.html',
  styleUrls: ['./consultacontrato.component.css']
})
export class ConsultacontratoComponent implements OnInit {
  contratos!: Contrato[];
  buscartext!: string;  
  constructor(private contratoservicio: ContratoservicioService) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.contratos= this.contratoservicio.get();
  }

}
