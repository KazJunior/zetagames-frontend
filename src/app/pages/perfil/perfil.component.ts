import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  nome: string | null = null;
  email: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.nome = sessionStorage.getItem('email'); 
  }
}
