import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { Client, ClientGrpc, Transport } from "@nestjs/microservices";
import { join } from "path";
import { Observable } from 'rxjs';
import { HeroesService } from "./models/hero-service.interface";
import { Hero } from "./models/hero.interface";

@Injectable()
export class AppService implements OnModuleInit {
  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}

  private heroesService: HeroesService;
  
  onModuleInit() {
    this.heroesService = this.client.getService<HeroesService>('HeroesService');
  }

  async getHero() {
    return await this.heroesService.findOne({ id: 1 });
  }
}