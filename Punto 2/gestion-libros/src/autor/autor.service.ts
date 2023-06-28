import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Injectable()
export class AutorService {

  private autores = new Array<object>;

  create(createAutorDto: CreateAutorDto) {

    const { id, name } = createAutorDto;

    this.autores.push({
      id,
      name
    });

    return `This action adds a new autor: ${ this.autores }`; 
  }

  findAll() {
    return `This action returns all autor ${ this.autores } `;
  }

  findOne(id: number) {
    return `This action returns a #${id} autor`;
  }

  update(id: number, updateAutorDto: UpdateAutorDto) {
    return `This action updates a #${id} autor`;
  }

  remove(id: number) {
    return `This action removes a #${id} autor`;
  }
}
