import { Routes } from '@interfaces/RoutesInterface';
import { Router } from 'express';
import logger from '@utils/logger';

class ApiRoute implements Routes {
  public path = '/api';
  public router = Router();

  constructor() {
    this.initiateRoutes();
  }

  private initiateRoutes() {
    logger.debug('Make this method not be a empty method.');
  }
}

export default ApiRoute;
