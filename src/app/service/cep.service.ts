import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  http: any;

  constructor(private hhtp: HttpClient) {}

  public consultaCep(cep: string){
    return this.http.get('https://viacep.com.br/ws/ ' + cep + '/json/');
  }
}
