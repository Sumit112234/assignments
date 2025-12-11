import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPerson extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const PersonSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
      maxlength: [100, 'Name cannot be more than 100 characters'],
    },
  },
  {
    timestamps: true,
  }
);

const Person: Model<IPerson> = 
  mongoose.models.Person || mongoose.model<IPerson>('Person', PersonSchema);

export default Person;