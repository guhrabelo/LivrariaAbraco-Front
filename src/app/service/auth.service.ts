import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private htttp: HttpClient
  ) { }

  logar(userLogin: UserLogin):Observable<UserLogin>{
    return this.htttp.post<UserLogin>('http://localhost:8080/usuario/logar', userLogin)

  }

  cadastrar(usuario: Usuario):Observable<Usuario>{
    return this.htttp.post<Usuario>('http://localhost:8080/usuario/cadastrar', usuario)
  }

}
