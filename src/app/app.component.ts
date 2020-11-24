import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm;
  modal;

  constructor(public modalService: NgbModal,
              public formBuilder: FormBuilder,
              public router: Router,
              public loginService: LoginService) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  openPrivateArea(modal): void {
    this.modal = this.modalService.open(modal);
  }
  login(data): void {
    this.loginService.login(data).subscribe(result => {
      this.loginForm.reset();
      this.modal.dismiss();
      this.router.navigate(['area-privata']);
    }, error => {
      alert('Credenziali errate');
    });
  }
}
