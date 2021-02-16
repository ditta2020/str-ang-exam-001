import { Injectable } from '@angular/core';
import { Hero } from './model/hero';
import { HEROES } from './heroes/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getAll(): Hero[] {
    return HEROES;
  }
  
}
