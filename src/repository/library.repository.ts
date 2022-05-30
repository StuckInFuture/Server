import { EntityRepository, Repository } from 'typeorm';
import {Library} from "../model/library.model";

@EntityRepository(Library)
export class LibraryRepository extends Repository<Library> {}
