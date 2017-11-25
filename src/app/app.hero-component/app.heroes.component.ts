import { Component, OnInit } from '@angular/core';

import { Hero } from '../app.hero';
import { HeroService } from '../app.hero.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './app.hero-component.tpl.html',
  styleUrls: ['./app.hero-component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: String): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
