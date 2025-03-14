// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller() // Ruta base vacía
export class AppController {
  @Get() // Esto manejará GET /
  getHello(): string {
    return 'Hello World';
  }
}