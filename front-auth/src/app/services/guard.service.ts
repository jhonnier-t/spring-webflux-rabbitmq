import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { DataService } from "./data.service";

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {

  constructor(
    private dataService: DataService,
    private router: Router
  ) {
  }

  canActivate(): boolean {
    if (!this.dataService.getData()) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }
  }

}