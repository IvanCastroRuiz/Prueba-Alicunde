import { Injectable } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';

@Injectable()
export class LibrosService {

  private libros = new Array<CreateLibroDto>;

  create(createLibroDto: CreateLibroDto) {
    const { id, title, chapters, pages,  autor } = createLibroDto;

    this.libros.push({
                  id,
                  title,
                  chapters,
                  pages,
                  autor
                });


    console.log(this.libros);

    return `This action adds a new libro ${ JSON.stringify(this.libros) } `;
  }

  findAll() {
    return `This action returns all libros ${ JSON.stringify(this.libros) }  `;
  }

  findOne(id: number) {

    const libroEncontrado = this.libros.find(libro => libro.id === id);  

    if (libroEncontrado) {
      const { pages, chapters, title } = libroEncontrado;

      const promedio = pages / chapters;
      const promedioFormateado = promedio.toFixed(2);

      return `libro id ${ id } - Titulo ${ title } - promedio de páginas por capítulo ${ promedioFormateado } `;
    } else {
      return ` No se encontro libro con este id ${ id }  `; // Retorna null si el objeto no se encuentra
    }

  }

  update(id: number, updateLibroDto: UpdateLibroDto) {
    return `This action updates a #${id} libro`;
  }

  remove(id: number) {
    return `This action removes a #${id} libro`;
  }
}
