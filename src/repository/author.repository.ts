import { EntityRepository, Repository } from 'typeorm';
import {Author} from "../model/author.model";

@EntityRepository(Author)
export class AuthorRepository extends Repository<Author> {}
