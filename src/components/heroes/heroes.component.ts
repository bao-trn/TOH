import {Component, OnInit} from '@angular/core';
import { Hero } from '../../app/interfaces/hero';
import {HeroService} from "../../app/services/hero.service";
import {MessageService} from "../../app/services/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{

  constructor(private heroService: HeroService) {}

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes => this.heroes = heroes));
  }



}
