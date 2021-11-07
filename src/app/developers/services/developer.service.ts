import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Developer } from '../models/developer.model';

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  constructor(private httpClient: HttpClient) {
  }

  getAll$(): Observable<Developer[]> {
    const url = environment.apiUrl + '/developers';

    return this.httpClient.get<Developer[]>(url
    );
  }
/*
  getById$(id: number): Observable<Developer> {
    const url = `${environment.apiUrl}/developers/${id}`;

    return this.httpClient.get<Developer>(url
    );
  }*/

  
  getById$(id: number) :Observable<Developer> {
    const url = `${environment.apiUrl}/developers/${id}`;

    return this.httpClient.get<Developer>(url
    ).pipe(take(1));
  }

  save$(developer: Developer): Observable<Developer> {
    if (!developer.id) {
      return this.create$(developer);
    } else {
      return this.edit$(developer);
    }
  }

  create$(developer: Developer): Observable<Developer> {
    const url = environment.apiUrl + '/developers';

    return this.httpClient.post<Developer>(url, developer);
  }

  edit$(developer: Developer): Observable<Developer> {
    const url = `${environment.apiUrl}/developers/${developer.id}`;

    return this.httpClient.put<Developer>(url, developer);
  }
/*
  delete$(id: number): Observable<void> {
    const url = `${environment.apiUrl}/developers/${id}`;

    return this.httpClient.delete<void>(url);
  }*/
  delete$(id: number): Observable<Developer> {
    const url = `${environment.apiUrl}/developers/${id}`;

    return this.httpClient.delete<Developer>(url);

}
}
