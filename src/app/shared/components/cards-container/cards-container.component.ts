import { Component, OnInit } from '@angular/core';
import { PokemonCardService } from '../../../core/services/pokemon-card/pokemon-card.service';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { catchError } from 'rxjs';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css',
})
export class CardsContainerComponent implements OnInit {
  constructor(private pokemonCardService: PokemonCardService) {}

  cards: PokemonTCG.Card[] = [];
  ngOnInit(): void {
    this.pokemonCardService
      .getAllCards()
      .pipe(
        catchError((error) => {
          console.error(error);
          return [];
        })
      )
      .subscribe((response) => {
        this.cards = response.data;
      });
  }
}
