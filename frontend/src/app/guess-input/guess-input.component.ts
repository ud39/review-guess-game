import { FormsModule, NgForm } from '@angular/forms';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-guess-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guess-input.component.html',
  styleUrl: './guess-input.component.scss',
})
export class GuessInputComponent {
  @ViewChild('gameGuess') gameGuess!: ElementRef;
  guess: string = '';

  @HostListener('window:keydown.enter', ['event'])
  handleKeyDown() {
    this.gameGuess.nativeElement.focus();
  }

  //TODO Add FuzzySearch
  onSubmit(f: NgForm) {
    f.resetForm();
  }
}
