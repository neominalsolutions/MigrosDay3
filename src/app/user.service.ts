import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, retry, RetryConfig } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  getUser():Observable<User[]>{
    return this.http.get<User[]>(environment.userApiBaseUrl);
  }

  getUserById(userId:number){
    return this.http.get<User>(`${environment.userApiBaseUrl}/${userId}`);
  }

  // rxjs ile gelen response map operatörü ile [] formatından  {} formatına dönüştürüldü.
  // pipe ile rxjs operatörlerine bağlanabiliriz.
  // delay ile 1 sn geçikmeli istek at
  // endpointe istek attığında sonuç dönmez ise 3 kere dene
  getUserByUserName(username:string){

    const config:RetryConfig = {
      count:3,
      delay:1000
    };

    return this.http.get<User>(`${environment.userApiBaseUrl}?username=${username}`).pipe(
      map((response:any) => {return response[0]}), 
      // delay(1000),
      retry(config),
      );
  }


}
