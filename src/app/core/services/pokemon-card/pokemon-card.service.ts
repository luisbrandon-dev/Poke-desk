import { Injectable } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { HttpService } from '../http/http.service';
import { PokemonCardEndpoints } from '../../endpoints/pokemon-card/pokemon-card.endpoints';
@Injectable({
  providedIn: 'root',
})
export class PokemonCardService {
  constructor(private httpService: HttpService) {
    this.httpService = httpService;
  }

  async getAllCards() {
    return this.httpService.get(PokemonCardEndpoints.ALL_CARDS);
  }

  async getAllTypes() {
    return PokemonTCG.getTypes();
  }

  async getAllSets() {
    return PokemonTCG.getAllSets();
  }

  async getAllRarities() {
    return PokemonTCG.getRarities();
  }
}
