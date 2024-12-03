import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { LoginService } from '../../services/login.service';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DefaultLoginLayoutComponent,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;

  constructor(
    private loginService: LoginService
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => alert("Login realizado com sucesso!"),
      error: () => alert("Erro ao realizar o Login")
    })
  }
}