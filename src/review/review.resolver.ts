import { Resolver } from '@nestjs/graphql';
import { ReviewService } from './review.service';
import { Review } from './entities/review.entity';

@Resolver(() => Review)
export class ReviewResolver {
  constructor(private readonly reviewService: ReviewService) {}
}
