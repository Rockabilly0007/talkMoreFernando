import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestModel, ResponseCreate } from 'src/app/app-request/request.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
    ) { }

  listRequests(): Observable<any>{
    return this.http.get('https://agdo-server.appspot.com/solicitacoes');
  }

  addRequest(request: RequestModel): Observable<any>{
    return this.http.post<RequestModel>('https://agdo-server.appspot.com/solicitacoes/', request);
  }

  updateRequest(_id: any, request: RequestModel): Observable<any>{
    return this.http.put<RequestModel>('https://agdo-server.appspot.com/solicitacoes/'.concat(_id), request);
  }

  deleteRequest(_id: any): Observable<any>{
    return this.http.delete('https://agdo-server.appspot.com/solicitacoes/'.concat(_id));
  }

}

