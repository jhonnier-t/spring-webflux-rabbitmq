import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilService } from '../../../shared/utils/util.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthComponent {

  constructor(private readonly utilService: UtilService,
    private readonly authService: AuthService,
    private readonly router: Router
  ){}

  authUserForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit(){
    const username: string = this.validateValue(this.authUserForm.value.username)
    const passwordMD5: string = this.utilService.encryptMD5(this.validateValue(this.authUserForm.value.password));
    this.callServiceAuth(username, passwordMD5);
  }

  goHome(){
    this.router.navigateByUrl('/home')
  }

  validateValue(value: string | null | undefined): string{
    return value? value: '';
  }

  callServiceAuth(email: string, passwordMD5: string){
    this.authService.loginAuth(email, passwordMD5).subscribe((value: string)=>{
      console.log(value);
      this.goHome()
    }, (error)=>{
      alert("Hubo un error al consumir el servicio de login")
      console.log(error); 
    });
  }

 }
