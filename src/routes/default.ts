import { Routes } from '@interfaces/RoutesInterface';
import { Router } from 'express';
import serviceUnavailableController from '@controllers/serviceUnavailable';

class ServiceUnavailableRoute implements Routes {
  public path = '/';
  public router = Router();

  constructor() {
    this.initiateRoutes();
  }

  private initiateRoutes() {
    this.router.all(`${this.path}`, serviceUnavailableController);
  }
}

export default ServiceUnavailableRoute;
