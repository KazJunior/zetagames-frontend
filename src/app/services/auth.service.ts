import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getUserName(): string | null {
    return sessionStorage.getItem('name');
  }
}