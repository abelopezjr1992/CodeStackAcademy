import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-scene2',
  templateUrl: './scene2.page.html',
  styleUrls: ['./scene2.page.scss'],
})

export class Scene2Page implements OnInit {
  registerForm: FormGroup;

  setprofile = {
    user: '',
    password: ''
  };

  get username() { return this.registerForm.get('username'); };
  get password() { return this.registerForm.get('password'); };

  constructor(private dServe: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  submitForm() {
    if (this.registerForm.invalid) {
      alert('There was an error. Please try again.')
    } else {
      console.log(this.registerForm.value)
      this.setprofile.user = this.registerForm.value.username;
      this.setprofile.password = this.registerForm.value.password;
      console.log(this.setprofile.user);
      this.dServe.profile = this.setprofile;
      this.dServe.login(this.registerForm.value);
      this.registerForm.reset();
    };
  };
}
