import { FormsModule, NgForm } from '@angular/forms';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ShareGameService } from '../share-game/share-game.service';

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
  game: string = 'FINALFANTASYXV';

  @HostListener('window:keydown.enter', ['event'])
  handleKeyDown() {
    this.gameGuess.nativeElement.focus();
  }

  constructor(private shareGame: ShareGameService) {}

  //TODO Add FuzzySearch
  onSubmit(f: NgForm) {
    f.resetForm();
  }

  //TODO Check if game is correct
  checkGame() {
    if (this.shareGame.game === this.game) {
    }
  }
}
