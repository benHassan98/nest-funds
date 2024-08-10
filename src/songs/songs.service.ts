import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';

@Injectable()
export class SongsService {


    findAll(){}
    findOneById(id:number){}
    craete(songDTO:CreateSongDto){}
    update(songDTO:CreateSongDto){}
    deleteOneById(id:number){}



}
