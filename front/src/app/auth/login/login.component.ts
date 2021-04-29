import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logged = false;
  username = '';
  password = '';

  constructor(private service: AuthService) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  clear() {
    this.username = '';
    this.password = '';
  }

  login() {
    if (this.username && this.password) {
      this.service.login(this.username, this.password).subscribe((data) => {
        localStorage.setItem('token', data.token);
        this.logged = true;
        this.clear();
        alert('You logged in successfully!');
        window.location.replace(`http://localhost:4200/posts`);
      });
    }
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('token');
  }
}
