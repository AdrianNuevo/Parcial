import { Injectable } from '@angular/core';
import { Contrato } from '../clases/contrato';


@Injectable({
  providedIn: 'root'
})
export class ContratoservicioService {
  constructor() { }
  get(): Contrato[]{
    return JSON.parse(localStorage.getItem('datos')|| '[]');
  }
  post(contrato: Contrato){
    let contratos: Contrato[]=[];
    if(this.get() !=null){
      contratos=this.get();
    }
    contratos.push(contrato);
    localStorage.setItem('datos', JSON.stringify(contratos))
  }
}
