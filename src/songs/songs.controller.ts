import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {

    constructor(private readonly songsService:SongsService){}

    @Get()
    findAll(){}

    @Get("/:id")
    findOneById(){}

    @Post()
    create(){}

    @Put()
    update(){}

    @Delete("/:id")
    deleteOneById(){}

}
