import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; 

  constructor(private http: HttpClient) { }

  getUserData(nameId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${nameId}`);
  }

  postUserData(nameId: number, data: any): Observable<any> {
    
    return this.http.post(`${this.apiUrl}/${nameId}`, data);
  }
}
