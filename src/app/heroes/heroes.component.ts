import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  //@Input() hero: Hero;

  heroes: Hero[];

  getHeroes(): Hero[] {
    return this.heroes;
  }

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getAll();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
