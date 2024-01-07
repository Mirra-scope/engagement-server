import { ObjectType, Field } from '@nestjs/graphql';
import { Entity } from 'typeorm';
import { DecimalColumn, TextColumn, VarcharColumn } from 'src/decorator/entity/entity.decorator';
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
  @VarcharColumn()
  user: string;

  @Field()
  @VarcharColumn()
  contextId: string;

  @Field()
  @VarcharColumn()
  contextType: string;
}
