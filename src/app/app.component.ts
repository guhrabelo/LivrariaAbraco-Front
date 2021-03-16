import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  homeRoute() {
    return this.router.url == '/home';
  }

  lojaRoute() {
    return this.router.url == '/loja';
  }

  sobreNosRoute() {
    return this.router.url == '/sobre-nos';
  }

  pagamentoRoute() {
    return this.router.url == '/pagamento';
  }
}



