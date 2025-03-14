// src/games/games.controller.ts
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    NotFoundException,
  } from '@nestjs/common';
  import { GamesService } from './games.service';
  import { Game } from './game.entity';
  
  
  @Controller('games')
  export class GamesController {
    constructor(private readonly gamesService: GamesService) {}
  
    @Get()
    findAll(): Game[] {
      return this.gamesService.findAll();
    }
  
    @Post()
    create(@Body() game: Omit<Game, 'id'>): Game {
      return this.gamesService.create(game);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updatedGame: Partial<Game>): Game {
      return this.gamesService.update(+id, updatedGame);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string): void {
      return this.gamesService.delete(+id);
    }
  }