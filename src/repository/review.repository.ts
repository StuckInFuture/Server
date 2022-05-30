import { EntityRepository, Repository } from 'typeorm';
import {Review} from "../model/review.model";

@EntityRepository(Review)
export class ReviewRepository extends Repository<Review> {}
