import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/clases/contrato';
import { ContratoservicioService } from 'src/app/servicios/contratoservicio.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  contrato!: Contrato;
  constructor(private contratoservicio: ContratoservicioService) { }

  ngOnInit(): void {
    this.contrato=new Contrato;
  }
  agregar(){
    alert("Se agrego el contrato" + JSON.stringify(this.contrato));
    this.contratoservicio.post(this.contrato);
  }
}
