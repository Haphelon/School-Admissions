import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials: any = {};

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  register() {
    if (this.credentials.password === this.credentials.password2) {
      this.authService.register(this.credentials.email, this.credentials.password)
        .then(res => console.log(res), error => console.log(error));
    }
  }

}
