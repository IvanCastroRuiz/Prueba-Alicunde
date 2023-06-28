import { Autor } from '../../autor/entities/autor.entity';
export class CreateLibroDto {
    id: number;
    title: string;
    chapters: number;
    pages: number; 
    autor: Autor;
}
