import { Component, computed, input, Input } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { EnergySymbolPipe } from '../../pipes/pipes.custom';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [EnergySymbolPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  Array(arg0: number) {
    throw new Error('Method not implemented.');
  }
  card = input.required<PokemonTCG.Card>();

  releaseDate = computed(() => {
    const date = this.card().set?.releaseDate;
    return date ? new Date(date).toLocaleDateString() : 'Unknown';
  });

  getEnergyColorClass(energyType: string): string {
    const colorMap: { [key: string]: string } = {
      Colorless: 'bg-gray-200 border-gray-300',
      Fire: 'bg-red-500 border-red-600',
      Water: 'bg-blue-500 border-blue-600',
      Lightning: 'bg-yellow-400 border-yellow-500',
      Psychic: 'bg-purple-500 border-purple-600',
      Fighting: 'bg-orange-700 border-orange-800',
      Darkness: 'bg-gray-800 border-gray-900',
      Metal: 'bg-gray-400 border-gray-500',
      Grass: 'bg-green-500 border-green-600',
      Dragon: 'bg-gradient-to-br from-purple-500 to-teal-400 border-gray-600',
    };

    return colorMap[energyType] || 'bg-gray-300 border-gray-400';
  }
}
