// Config package binds the config/default.js file
import config, { IConfig } from 'config';
import { Container } from 'inversify';
// Utils
import winston, { Logger } from 'winston';
import TYPES from './constants/types';
// Controllers import autobinds them to the application
import './controllers/BikeController';
import './controllers/PartController';
import './controllers/UserController';
// Repositories
import { BikeRepository } from './repository/BikeRepository';
import { PartRepository } from './repository/PartRepository';
import { UserRepository } from './repository/UserRepository';
// Services
import { BikeService } from './services/BikeService';
import { PartService } from './services/PartService';
import { UserService } from './services/UserService';
import { MongoConnection } from './utils/MongoConnection';

const logger: Logger = winston.createLogger({});
// Just for dev purposes now
logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

// Global container
const container = new Container();

container.bind<IConfig>(TYPES.config).toConstantValue(config);
container.bind<Logger>(TYPES.logger).toConstantValue(logger);

const mongoConnection = new MongoConnection(config);
container.bind<MongoConnection>(TYPES.MongoConnection).toConstantValue(mongoConnection);

container.bind<BikeService>(TYPES.BikeService).to(BikeService).inSingletonScope();
container.bind<BikeRepository>(TYPES.BikeRepository).to(BikeRepository).inSingletonScope();
container.bind<UserService>(TYPES.UserService).to(UserService).inSingletonScope();
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository).inSingletonScope();
container.bind<PartService>(TYPES.PartService).to(PartService).inSingletonScope();
container.bind<PartRepository>(TYPES.PartRepository).to(PartRepository).inSingletonScope();
export { container };
