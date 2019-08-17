import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
// import { RouterExtensions } from 'nativescript-angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormService } from '../halpers/form.service';

@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  moduleId: module.id,
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  isLogin = true;
  isLoading = false;
  emailControlIsValid = true;
  passwordControlIsValid = true;
  @ViewChild('passwordEl', { static: true }) passwordEl: ElementRef<any>;
  @ViewChild('emailEl', { static: true }) emailEl: ElementRef<any>;

  constructor(private router: Router,
    private authService: AuthService,
    private formService: FormService) { }

  ngOnInit() {

    this.form = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(6)]
      })
    });

    this.form.get('email').statusChanges.subscribe(status => {
      this.emailControlIsValid = status === 'VALID';
    });

    this.form.get('password').statusChanges.subscribe(status => {
      this.passwordControlIsValid = status === 'VALID';
    });
  }

  onDone() {
    this.formService.dismiss([this.emailEl.nativeElement, this.passwordEl.nativeElement]);
  }

  onSubmit() {
    this.formService.dismiss([this.emailEl.nativeElement, this.passwordEl.nativeElement]);

    if (!this.form.value) {
      return;
    }

    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    this.form.reset();
    this.emailControlIsValid = true;
    this.passwordControlIsValid = true;
    this.isLoading = true;
    if (this.isLogin) {
      // console.log('Logging in');
      this.authService.login(email, password).subscribe(res => {
        this.router.navigate(['/challenges'], { clearHistory: true });
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = false;
      });
    } else {
      // console.log('Signing up');
      this.authService.signUp(email, password).subscribe(res => {
        this.router.navigate(['/challenges'], { clearHistory: true });
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = false;
      });
    }
  }

  onSwitch() {
    this.isLogin = !this.isLogin;
  }

}
