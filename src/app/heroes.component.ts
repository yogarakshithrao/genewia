import { Component, OnInit } from '@angular/core';
import { Hero } from './app.hero';
import { HeroService } from './app.hero.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './app.hero-component.tpl.html',
  styleUrls: ['./app.hero-component.css'],
  providers: []
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
