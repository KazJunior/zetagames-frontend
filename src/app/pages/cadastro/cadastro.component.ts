import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { LoginService } from '../../services/login.service';

interface cadastroForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DefaultLoginLayoutComponent,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastroForm!: FormGroup<cadastroForm>;

  constructor(
    private loginService: LoginService
  ){
    this.cadastroForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(4)])
    })
  }

  submit() {
    this.loginService.signup(this.cadastroForm.value.name, this.cadastroForm.value.email, this.cadastroForm.value.password).subscribe({
      next: () => alert("Cadastro realizado com sucesso!"),
      error: () => alert("Erro ao realizar o Cadastro")
    })
  }
}