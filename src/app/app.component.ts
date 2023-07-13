import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  password: string = '';
  passwordStrength: string = '';
  passwordStrengthPercentage: number = 0;

  checkPasswordStrength() {
    const lowercaseRegex = /^(?=.*[a-z]).+$/;
    const uppercaseRegex = /^(?=.*[A-Z]).+$/;
    const numberRegex = /^(?=.*[0-9]).+$/;
    const specialCharRegex = /^(?=.*[!@#$%^&*]).+$/;

    if (this.password.length < 8) {
      this.passwordStrength = 'Weak';
      this.passwordStrengthPercentage = 0;
    } else if (lowercaseRegex.test(this.password) && uppercaseRegex.test(this.password) && numberRegex.test(this.password) && specialCharRegex.test(this.password)) {
      this.passwordStrength = 'Strong';
      this.passwordStrengthPercentage = 100;
    } else {
      this.passwordStrength = 'Medium';
      this.passwordStrengthPercentage = 50;
    }
  }
}
