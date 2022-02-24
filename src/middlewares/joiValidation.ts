import { ObjectSchema } from 'joi';

const validationJoi = <T>(schema: ObjectSchema, object: T) => {
  const { error } = schema.validate(object);
  if (error) {
    throw error;
  }
};

export default validationJoi;
