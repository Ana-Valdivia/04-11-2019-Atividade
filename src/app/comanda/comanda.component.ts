import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  formCliente: FormGroup;

  constructor(public formBuilder: FormBuilder) { }
 

  

  ngOnInit() {

    this.formCliente =this.formBuilder.group({
       inChoop :this.formBuilder.control(''),
       inPizza :this.formBuilder.control(''),
       inRecheio :this.formBuilder.control(''),
       inPessoas :this.formBuilder.control(''),
       
    })

  }
  onProcessar(){

    let totalChopp:number =   this.formCliente.value.chopp * 7.30;
    let totalPizza:number =   this.formCliente.value.pizza * 31.50;
    let totalRecheio:number =   this.formCliente.value.recheio * 5.90;
    let totalPessoa:number =   this.formCliente.value.pessoa;
    let valorTaxa: number = 0;   

    let totalTotal: number = totalChopp + totalPizza + totalRecheio;

    let resulTaxa: boolean = this.formCliente.value.taxaservico;

    if(resulTaxa == true)
    {
        valorTaxa = totalTotal * 0.1;        
        
    }
    else
    {
      valorTaxa = 0;
    
    }


    let totalAPagar: number = totalTotal + valorTaxa;
    let porPessoa: number = totalAPagar / totalPessoa;

    alert(`Total: ${totalTotal} \n Valor Taxa: ${valorTaxa} \nTotal com Taxa: ${totalAPagar} \nTotal Por pessoa: ${porPessoa}`);


  
  }
     
}
