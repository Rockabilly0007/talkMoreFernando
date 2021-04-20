import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from 'src/app/services/request.service';
import { RequestModel, ResponseCreate, RequestCreate } from 'src/app/app-request/request.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './app-request.component.html',
  styleUrls: ['./app-request.component.css']
})
export class AppRequestComponent implements OnInit {

  // request: Array<any> = new Array();
  request: RequestModel = new RequestModel();
  requests: [];
  err: any;
  id: number;

  form: FormGroup;
  invalidCompany: boolean = false;
  response: ResponseCreate;

  constructor(
    private requestService: RequestService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.listRequests();

    this.form = new FormGroup({
      empresa: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cnpj: new FormControl('', Validators.required),
      plano: new FormControl('', Validators.required),
      tarifa: new FormControl('', Validators.required),
      minutos: new FormControl('', Validators.required),
      vplano: new FormControl('', Validators.required),
      dataAdesao: new FormControl('', Validators.required)
    });
  }

  listRequests(){
    this.requestService.listRequests().subscribe(requests => {
      this.requests = requests;
    }, err =>{
      console.log('Erro ao listar solicitações', err);
    })
  }

  addRequest(){
    console.log(this.request); 
    this.requestService.addRequest(this.request).subscribe(res => {
      this.request = new RequestModel();
      this.listRequests();
    }, err =>{
      console.log('Erro ao adicionar solicitação', err);
   })
  }

  updateRequest(_id: any){
    this.requestService.updateRequest(_id, this.request).subscribe(data => {
      this.request = new RequestModel();
      this.listRequests();
      console.log(this.request); 
    }, err =>{
      console.log('Erro ao atualizar solicitação', err);
   })
  }

  deleteRequest(_id: any){
    this.requestService.deleteRequest(_id).subscribe(data => {
      this.request = new RequestModel();
      this.listRequests();
      alert('Solicitacão Removida com sucesso!')
    }, err =>{
      console.log('Erro ao deletar solicitação', err);
    })
  }

  get empresa(){
    return this.form.get('empresa');
  }
  get cnpj(){
    return this.form.get('cnpj');
  }
  get plano(){
    return this.form.get('plano');
  }

}
