import { Component, OnInit } from '@angular/core';
import { Hero } from './app.hero';
import { HeroService } from './app.hero.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './app.dashboard.tpl.html',
    styleUrls: ['./app.dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}
