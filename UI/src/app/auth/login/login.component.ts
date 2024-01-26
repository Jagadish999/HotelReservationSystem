import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  hidePassword: boolean = true;

  constructor(fb: FormBuilder, private apiService: ApiService, private snackBar: MatSnackBar){
    this.loginForm = fb.group({
      email: fb.control('', [Validators.required]),
      password: fb.control('', [Validators.required]),
      selectedOption: fb.control('USER', [Validators.required]),
    })
  }

  login(){

    let user = {
      email: this.loginForm.get('email')?.value,
      userType: this.loginForm.get('selectedOption')?.value,
      password: this.loginForm.get('password')?.value,
    }

    console.log(user);

    this.apiService.login(user).subscribe({
      next: res => {
        
        if( res === "!!!NO SUCH ACCOUNT!!!"){
            this.snackBar.open("!!! Invalid Credentials !!!");
        }
        else if(res === "UNAPPROVED"){
          this.snackBar.open("Account Not Verified");
        }
        else{
          localStorage.setItem('access_token', res);
          this.apiService.userStatus.next("loggedIn");
        }
      }
    })
  }

}
