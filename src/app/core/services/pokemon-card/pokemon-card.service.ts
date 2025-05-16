import { Injectable } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { HttpService } from '../http/http.service';
import { PokemonCardEndpoints } from '../../endpoints/pokemon-card/pokemon-card.endpoints';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PokemonCardService {
  constructor(private httpService: HttpService) {
    this.httpService = httpService;
  }

  getAllCards(): Observable<any> {
    return this.httpService.get(PokemonCardEndpoints.ALL_CARDS);
  }

  getAllTypes(): Observable<any> {
    return this.httpService.get(PokemonCardEndpoints.ALL_TYPES);
  }

  getAllSets() {
    return this.httpService.get(PokemonCardEndpoints.ALL_SETS);
  }

  getAllRarities() {
    return this.httpService.get(PokemonCardEndpoints.ALL_RARITIES);
  }
}
