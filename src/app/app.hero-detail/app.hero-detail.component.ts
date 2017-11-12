import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../app.hero.service';
import { Hero } from '../app.hero';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './app.hero-detail.component.tpl.html',
    styleUrls: ['./app.hero-detail.component.css'],
})

export class HeroDetailComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private heroService: HeroService,
    ) { }

    @Input() hero: Hero;

    ngOnInit(): void {
        this.getHero();
    }

    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
}
