import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpService: HttpClient) { }

  getUsers$(): Observable<IUser[]> {
    return this.httpService.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
  getUserById$(id: string): Observable<IUser> {
    return this.httpService.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
