// src/games/games.controller.ts
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
  } from '@nestjs/common';
  import { GamesService } from './games.service';
  import { Game } from './game.entity';
  
  @Controller('games') // Asegúrate de que la ruta base sea 'games'
  export class GamesController {
    constructor(private readonly gamesService: GamesService) {}
  
    @Get() // Esto manejará GET /games
    findAll(): Game[] {
      return this.gamesService.findAll();
    }
  
    @Post() // Esto manejará POST /games
    create(@Body() game: Omit<Game, 'id'>): Game {
      return this.gamesService.create(game);
    }
  
    @Put(':id') // Esto manejará PUT /games/:id
    update(@Param('id') id: string, @Body() updatedGame: Partial<Game>): Game {
      return this.gamesService.update(+id, updatedGame);
    }
  
    @Delete(':id') // Esto manejará DELETE /games/:id
    delete(@Param('id') id: string): void {
      return this.gamesService.delete(+id);
    }
  }