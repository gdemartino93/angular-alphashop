import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthappService } from './authapp.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private BasicAuth: AuthappService, private route:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //usiamo questo per evitare che se la rotta è protette si viualizzi una pagina bianca.
    //cosi' facendo se l'utente tenta di accedere ad una rotta protetta verrà carica la rotta login e non la pagina bianca come nell'esempio sotto
    if(!this.BasicAuth.isLogged()){
      this.route.navigate(['login']);
      return false;
    }else{
      return true;
    }
    //verifica se l'utente è loggato e restituisce true altrimenti restituirà false
    //quindi questa è la condizione per usare guard e quindi accedere alle rotte
    // return this.BasicAuth.isLogged();
  }
}
