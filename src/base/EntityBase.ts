import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity, BeforeInsert, PrimaryGeneratedColumn } from 'typeorm';
import { BigIntColumn } from '../decorator/entity/entity.decorator';

@ObjectType()
export class EntityBase extends BaseEntity {
  public snapshot: this;
  //nest g res Like & nest g res Click & nest g res Dislike
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid', { name: 'ID' })
  ID: string;

  @Field(() => Number)
  @BigIntColumn()
  createdAt: number;

  @BeforeInsert()
  async beforeEntityInsert() {
    this.createdAt = Date.now();
  }
}
