import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

    signupForm: FormGroup = this.formBuilder.group({
        username: [
            '', [
                Validators.required
            ]
        ],
        email: [
            '', [
                Validators.required,
                Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/)
            ]
        ],
        password: [
            '', [
                Validators.required
            ]
        ],
        confirm: [
            '', [
                Validators.required
            ]
        ]
    });

  ngOnInit(): void {
  }

}
