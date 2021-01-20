import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { offres } from './offres';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  private baseUrl ='http://127.0.0.1:8000/api'
  constructor(private http: HttpClient) { }

  getProductList(): Observable<any> {
    let x = this.http.get(`${this.baseUrl}/clients`);
    console.log(x);
    return x; 
  }
  deleteoffre(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/clients/${id}`, { responseType: 'text' });
  }
  getoffre(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/clients/${id}`);
  }
  createoffre(offres: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/clients`, offres);
  }
  updateoffre(id: number, offres: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/clients/${id}`, offres);
  }
  
  
}
