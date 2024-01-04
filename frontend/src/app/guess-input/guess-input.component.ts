import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-guess-input',
  standalone: true,
  imports: [],
  templateUrl: './guess-input.component.html',
  styleUrl: './guess-input.component.scss',
})
export class GuessInputComponent {
  @ViewChild('gameGuess') gameGuess!: ElementRef;

  @HostListener('window:keydown.enter', ['event'])
  handleKeyDown(event: KeyboardEvent) {
    this.gameGuess.nativeElement.focus();
    if (this.gameGuess.nativeElement === document.activeElement) {
      this.gameGuess.nativeElement.value = '';
    }
    event.preventDefault();
  }
}
