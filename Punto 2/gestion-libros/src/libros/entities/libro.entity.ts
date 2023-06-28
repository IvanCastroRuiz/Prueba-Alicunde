import { Autor } from '../../autor/entities/autor.entity'

export class Libro {
    id: number;
    title: string;
    chapters: number;
    pages: number; 
    autor: Autor;
}