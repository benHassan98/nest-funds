import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './entity/song.entity';
import { DeleteResult, Repository } from 'typeorm';
import { throwIfEmpty } from 'rxjs';

@Injectable()
export class SongsService {

    constructor(@InjectRepository(Song) private readonly repository:Repository<Song>){}

    findAll() :Promise<Song[]>{
        return this.repository.find();
    }

    findOneById(id:number):Promise<Song>{
        return this.repository.findOneBy({id});
    }

    create(songDTO:CreateSongDto): Promise<Song>{
        const song = new Song();
        song.title = songDTO.title;
        song.artists = songDTO.artists;
        song.duration = songDTO.duration;
        song.lyrics = songDTO.lyrics;
        song.releasedDate = songDTO.releasedDate;

        return this.repository.save(song);

    }

    update(id:number, songDTO:CreateSongDto):Promise<Song>{
        const song = new Song();
        song.id = id;
        song.title = songDTO.title;
        song.artists = songDTO.artists;
        song.duration = songDTO.duration;
        song.lyrics = songDTO.lyrics;
        song.releasedDate = songDTO.releasedDate;

        return this.repository.save(song);
    }

    deleteOneById(id:number):Promise<DeleteResult>{
        return this.repository.delete({id});
    }



}
