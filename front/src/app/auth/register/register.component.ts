import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {AuthToken} from '../../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: AuthToken[] = [];
  public username = '';
  public password = '';
  public confirm = '';
  public email = '';
  logged = false;
  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }
  clear() {
    this.username = '';
    this.password = '';
    this.confirm = '';
    this.email = '';
  }

  register() {
    if (!this.username || !this.password || !this.confirm) {
      alert('Fill all lines!');
      this.clear();
    }
    else if (this.password !== this.confirm) {
      alert('Password mismatch. Check it, please!');
    }
    this.service.register(this.username, this.password, this.email).subscribe(res => {
      this.user.push(res);
      console.log(this.username, this.password, this.email);
      localStorage.setItem('name', res.username);
      this.clear();
      this.router.navigate(['/login']);
      alert('You were successfully signed up. Now, please, log in');
    });
  }
}

