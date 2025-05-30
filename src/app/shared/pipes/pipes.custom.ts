import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'energySymbol', standalone: true })
export class EnergySymbolPipe implements PipeTransform {
  transform(energyType: string): string {
    const symbols: { [key: string]: string } = {
      Colorless: '⭐',
      Fire: '🔥',
      Water: '💧',
      Lightning: '⚡',
      Psychic: '🌀',
      Fighting: '✊',
      Darkness: '⚫',
      Metal: '🛡️',
      Grass: '🌿',
      Dragon: '🐉',
    };
    return symbols[energyType] || energyType.charAt(0);
  }
}
