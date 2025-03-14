// src/games/games.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Game } from './game.entity';

@Injectable()
export class GamesService {
  private games: Game[] = [];
  private nextId = 1;

  // Obtener todos los juegos
  findAll(): Game[] {
    return this.games;
  }

  // Crear un nuevo juego
  create(game: Omit<Game, 'id'>): Game {
    const newGame = { id: this.nextId++, ...game };
    this.games.push(newGame);
    return newGame;
  }

  // Actualizar un juego
  update(id: number, updatedGame: Partial<Game>): Game {
    const game = this.games.find((g) => g.id === id);
    if (!game) {
      throw new NotFoundException(`Juego con id ${id} no encontrado`);
    }
    Object.assign(game, updatedGame);
    return game;
  }

  // Eliminar un juego
  delete(id: number): void {
    const gameIndex = this.games.findIndex((g) => g.id === id);
    if (gameIndex === -1) {
      throw new NotFoundException(`Juego con id ${id} no encontrado`);
    }
    this.games.splice(gameIndex, 1);
  }
}