import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiUrl = 'http://localhost:5000/api'

  constructor(private http: HttpClient) { }

  login(data:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, data)
  }

  signup(data:any, token:string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    }
    return this.http.post<any>(`${this.apiUrl}/signup`, data, httpOptions)
  }

  getPresets(token:string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    }
    return this.http.get(`${this.apiUrl}/presets`, httpOptions)
  }

  savePreset(data: any, token:string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    }
    return this.http.post<any>(`${this.apiUrl}/presets`, data, httpOptions)
  }

  sendProposalForm(data:any, token:string):Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    }
    return this.http.post<any>(`${this.apiUrl}/proposals`, data, httpOptions)
  }
   
}
