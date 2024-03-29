import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;

@Schema({timestamps: true})
export class Company {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  description: number;

  @Prop()
  createdBy: {
    _id: string,
    email: string
  };

  @Prop()
  updatedBy: {
    _id: string,
    email: string
  };

  @Prop()
  deletedBy: {
    _id: string,
    email: string
  };

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
  
  @Prop()
  isDeleted: boolean;

  @Prop()
  deletedAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
