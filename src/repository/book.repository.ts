import { EntityRepository, Repository } from 'typeorm';
import {Book} from "../model/book.model";

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {}
