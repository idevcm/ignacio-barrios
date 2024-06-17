import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HeaderComponent} from "../../shared/header/header.component";
import {LoadingSpinnerComponent} from "../../shared/loading-spinner/loading-spinner.component";
import {HomeButtonComponent} from "./home-button/home-button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    LoadingSpinnerComponent,
    HomeButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  typedText = ''; // Variable para almacenar el texto que se está escribiendo y borrando
  textArray = ["Ignacio Barrios", "Programador Backend", "Java Developer", "Angular Developer"];
  typingDelay = 100;
  erasingDelay = 50;
  newTextDelay = 1500; // Delay entre el texto actual y el siguiente
  textArrayIndex = 0;
  charIndex = 0;

  ngOnInit(): void {
    if (this.textArray.length) setTimeout(() => this.type(), this.newTextDelay + 250);
  }

  type() {
    if (this.charIndex < this.textArray[this.textArrayIndex].length) {
      this.typedText += this.textArray[this.textArrayIndex].charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.type(), this.typingDelay);
    } else {
      setTimeout(() => this.erase(), this.newTextDelay);
    }
  }

  erase() {
    if (this.charIndex > 0) {
      this.typedText = this.textArray[this.textArrayIndex].substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => this.erase(), this.erasingDelay);
    } else {
      this.textArrayIndex++;
      if (this.textArrayIndex >= this.textArray.length) this.textArrayIndex = 0;
      setTimeout(() => this.type(), this.typingDelay + 1100);
    }
  }
}

