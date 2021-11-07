import { NgIf } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Hiring } from '../models/hiringProcess.model';

@Injectable({
  providedIn: 'root'
})
export class HiringsService {

  constructor(private httpClient: HttpClient) {
  }

  getAll$(): Observable<Hiring[]> {
    const url = environment.apiUrl + '/hirings';

    const httpParams = new HttpParams({
      fromObject: {
        _embed: 'courses'
      }
    })

    return this.httpClient.get<Hiring[]>(url, {
      params: httpParams
    });
  }

  getById$(id: number): Observable<Hiring> {
    const url = `${environment.apiUrl}/hirings/${id}`;

    return this.httpClient.get<Hiring>(url);
  }

  save$(hiring: Hiring): Observable<Hiring> {
    if (!hiring.id) {
      return this.create$(hiring);
    } else {
      return this.edit$(hiring);
    }
  }

  create$(hiring: Hiring): Observable<Hiring> {
    const url = environment.apiUrl + '/hirings';
 if (hiring.startDate >= new Date())
    return this.httpClient.post<Hiring>(url, hiring);

    

  }

  edit$(hiring: Hiring): Observable<Hiring> {
    const url = `${environment.apiUrl}/hirings/${hiring.id}`;

    return this.httpClient.put<Hiring>(url, hiring);
  }

  delete$(id: number): Observable<void> {
    const url = `${environment.apiUrl}/hirings/${id}`;

    return this.httpClient.delete<void>(url);
  }
}
