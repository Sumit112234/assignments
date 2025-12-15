import { ZodError, ZodSchema } from 'zod';

interface ValidationError {
  field: string;
  message: string;
}

interface ValidationSuccess<T> {
  success: true;
  data: T;
}

interface ValidationFailure {
  success: false;
  errors: ValidationError[];
}

export type ValidationResult<T> = ValidationSuccess<T> | ValidationFailure;

export function zodValidator<T>(
  schema: ZodSchema<T>,
  data: unknown
): ValidationResult<T> {
  try {
    const validated = schema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    //   console.log("Raw error:", error);
    //   console.log("Is ZodError:", error instanceof ZodError);
    if (error instanceof ZodError) {
        console.log('Zod Validation Error:', error.issues);
        const errors: ValidationError[] = error.issues.map(issue => ({
        field: issue.path.join("."),
        message: issue.message
      }));

      return { success: false, errors };
    }
    return { 
      success: false, 
      errors: [{ field: 'general', message: 'Validation failed' }] 
    };
  }
}