import { ObjectType, Field } from '@nestjs/graphql';
import { Entity } from 'typeorm';
import { DecimalColumn, TextColumn, UuidColumn, VarcharColumn } from 'src/decorator/entity/entity.decorator';
import { EntityBase } from 'src/base/EntityBase';

@ObjectType()
@Entity()
export class Review extends EntityBase {
  @Field()
  @DecimalColumn()
  rating: number;

  @Field()
  @TextColumn()
  comment: string;

  @Field()
  @UuidColumn()
  userId: string;

  @Field()
  @UuidColumn()
  contextId: string;

  @Field()
  @VarcharColumn()
  contextType: string;
}
