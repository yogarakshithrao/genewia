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
}
