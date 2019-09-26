import { Injectable } from '@angular/core';
import { ILogin } from 'src/app/interfaces/login';   
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "localhost:8080/hello"; 

  constructor(
    private http: HttpClientModule
  ) { }

  public logout() :void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');    
  }


}
