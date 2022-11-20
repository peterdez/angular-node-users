import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

const baseUrl = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  get(userId: any): Observable<User> {
    return this.http.get<User>(`${baseUrl}/${userId}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(userId: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${userId}`, data);
  }

  delete(userId: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${userId}`);
  }

}