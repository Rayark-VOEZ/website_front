import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  loginForm: FormGroup = this.formBuilder.group({
      email: [
          '', [
              Validators.required,
              Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/)
          ]
      ],
      password: [
          '', [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(20),
          ]
      ]
  });

  ngOnInit(): void {
  }

}
