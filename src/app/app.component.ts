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
  inputState: boolean = false;

  toggle(): void {
    this.inputState = !this.inputState;
  }

  checkPasswordStrength(): void {
    const lowercaseRegex = /^(?=.*[a-z]).+$/;
    const uppercaseRegex = /^(?=.*[A-Z]).+$/;
    const numberRegex = /^(?=.*[0-9]).+$/;
    const specialCharRegex = /^(?=.*[!@#$%^&*]).+$/;

    if (this.password.length === 0) {
      this.passwordStrength = '';
      this.passwordStrengthPercentage = 0;
    } else if (this.password.length < 8) {
      this.passwordStrength = 'Weak';
      this.passwordStrengthPercentage = 25;
    } else if (
      lowercaseRegex.test(this.password) &&
      uppercaseRegex.test(this.password) &&
      numberRegex.test(this.password) &&
      specialCharRegex.test(this.password)
    ) {
      this.passwordStrength = 'Strong';
      this.passwordStrengthPercentage = 100;
    } else if (
      (lowercaseRegex.test(this.password) && uppercaseRegex.test(this.password)) ||
      (lowercaseRegex.test(this.password) && numberRegex.test(this.password)) ||
      (lowercaseRegex.test(this.password) && specialCharRegex.test(this.password)) ||
      (uppercaseRegex.test(this.password) && numberRegex.test(this.password)) ||
      (uppercaseRegex.test(this.password) && specialCharRegex.test(this.password)) ||
      (numberRegex.test(this.password) && specialCharRegex.test(this.password))
    ) {
      this.passwordStrength = 'Medium';
      this.passwordStrengthPercentage = 75;
    } else {
      this.passwordStrength = 'Weak';
      this.passwordStrengthPercentage = 25;
    }
  }
}
