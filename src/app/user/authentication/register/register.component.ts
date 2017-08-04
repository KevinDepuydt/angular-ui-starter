import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../_services/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: any = {};
  loading = false;
  error = '';
  success = '';

  constructor(private userService: UserService) { }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.success = 'Registration successful';
          this.loading = false;
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

  clean() {
    this.success = '';
    this.error = '';
  }
}
