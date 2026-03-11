import type { NextFunction, Request, Response } from "express";
import type { AnyZodObject } from "zod";

export function validate(schema: AnyZodObject) {
  return (request: Request, _response: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: request.body,
      query: request.query,
      params: request.params
    });

    if (!result.success) {
      return next(result.error);
    }

    request.body = result.data.body;
    return next();
  };
}
