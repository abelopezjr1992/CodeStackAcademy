import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userForm: FormGroup;
  setprofile: {
    user: '',
    password: ''
  };

  get userName() { return this.userForm.get('username'); };
  get password() { return this.userForm.get('password'); };
  
  constructor(private dServe: DataService, private formBuilder) { }
  
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  };
  
  
  submitForm() {
    if (this.userForm.invalid) {
      alert('There was an error. Please try again.')
    } else {
      this.dServe.login(this.userForm.value);
      this.userForm.reset();
      this.setprofile.user = this.userForm.value.username;
      this.setprofile.user = this.userForm.value.password;
      this.dServe.profile = this.setprofile;
    };
  };
}
