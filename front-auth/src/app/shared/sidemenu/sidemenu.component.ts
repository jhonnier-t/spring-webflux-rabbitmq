import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { User, ResponseModelDto } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent {

  public menuItems = routes.map(path => path.children ?? []).flat();

  user: User = {} as User;

  activeRouteDashboard = signal<boolean>(true);
  activeRouteAudit = signal<boolean>(false);
  activeRouteUsers = signal<boolean>(false);

  constructor(private readonly authService: AuthService,
    private readonly router: Router,
    private dataService: DataService) {
  }


  ngOnInit() {
    this.user = this.dataService.getData();
  }

  logoutAuth() {

    this.authService.logoutAuth(this.user.email).subscribe((response: ResponseModelDto<string>) => {
      this.goLogin();
    }, (error) => {
      alert("Hubo un error al cerrar sesion")
      this.goLogin();
    });
  }

  goLogin() {
    this.router.navigateByUrl('/login')
  }

}
