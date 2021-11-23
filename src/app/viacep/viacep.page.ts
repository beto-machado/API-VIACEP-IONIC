import { Component, OnInit } from '@angular/core';
import { CepService } from '../service/cep.service';

@Component({
  selector: 'app-viacep',
  templateUrl: './viacep.page.html',
  styleUrls: ['./viacep.page.scss'],
})
export class ViacepPage {

  private cep: string;
  private endereco: any;

  constructor(private cepService: CepService) { }

  private consultaCep() {
    this.cepService.consultaCep(this.cep).subscribe(
      data => {
        this.endereco = (data as any);
      },
      error => {
        console.error(error);
      }
    );
  }
}
