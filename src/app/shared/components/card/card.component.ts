import { Component, Input } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  card: PokemonTCG.Card = {} as PokemonTCG.Card;
}
