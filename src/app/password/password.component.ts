import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  passwordLength = 8;
  useLetters = true;
  useNumbers = true;
  useSymbols = true;
  generatedPassword = '';

  private letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private numbers = '0123456789';
  private symbols = '!@#$%^&*()_+-=[]{}|;:\'",.<>/?`~';

  constructor() { }
  

  generatePassword() {
    let characterSet = '';

    if (this.useLetters) {
      characterSet += this.letters;
    }

    if (this.useNumbers) {
      characterSet += this.numbers;
    }

    if (this.useSymbols) {
      characterSet += this.symbols;
    }

    this.generatedPassword = Array.from({ length: this.passwordLength },() => characterSet.charAt(Math.floor(Math.random() * characterSet.length)))
      .join('');
  }

  ngOnInit() {
  }
}




