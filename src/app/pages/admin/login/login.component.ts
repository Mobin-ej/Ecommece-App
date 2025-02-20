import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGoogle, faFacebook, faTwitter, faApple } from '@fortawesome/free-brands-svg-icons';
import { ILogin } from '../../../types/app.interface';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  faGoogle = faGoogle;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faApple = faApple;

  loginObj: ILogin = {
    username: '',
    password: '',
  }

  constructor(private router: Router) {}

  onLogin() {
    if(this.loginObj.username == 'admin' && this.loginObj.password == '334455') {
      this.router.navigateByUrl('/products');
    } else {
      alert('Wrong Credentials')
    }
  }

}
