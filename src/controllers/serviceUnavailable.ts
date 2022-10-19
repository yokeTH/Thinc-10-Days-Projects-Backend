import HttpException from '@exceptions/http.exception';
import { NextFunction, Request, Response } from 'express';

const defaultController = async (req: Request, res: Response, next: NextFunction) => {
  next(new HttpException(503, 'Service unavailable!!'));
};

export default defaultController;
