import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url = environment.apiUrl;


  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get(this.url);
  }
}
