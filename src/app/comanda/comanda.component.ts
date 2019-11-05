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
    this.formCliente = this.formBuilder.group({
      inServico : this.formBuilder.control(true),
      inChopp : this.formBuilder.control(''),
      inPizza : this.formBuilder.control(''),
      inRecheio : this.formBuilder.control(''),
      inPessoa : this.formBuilder.control('')
      })
  }

  onSubmit() {
    console.log(this.formCliente.value);
    }

    onProcessar(){

  let totalChopp: number = this.formCliente.value.inChopp * 7.30;
  let totalPizza: number = this.formCliente.value.inPizza * 31.50;
  let totalRecheio: number = this.formCliente.value.inRecheio * 5.90;
  let totalPessoas: number = this.formCliente.value.inPessoa;
  let valorTaxa: number = 0;

  let totalCalculo : number = totalChopp + totalPizza + totalRecheio ;

let resulTaxa: boolean = this.formCliente.value.inServico;

    if(resulTaxa == true)
    {
        valorTaxa = totalCalculo * 0.1;
    }
    else
    {
      valorTaxa = 0;
    }
    let totalAPagar: number = totalCalculo + valorTaxa;
    let porPessoa: number = totalAPagar / totalPessoas;

    alert(`Total: ${totalCalculo.toFixed(2)} \nValor Taxa: ${valorTaxa.toFixed(2)} \nTotal com Taxa: ${totalAPagar.toFixed(2)} \nTotal Por pessoa: ${porPessoa.toFixed(2)}`);
 
  
    }

}
