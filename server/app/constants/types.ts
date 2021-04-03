const TYPES = {
  config: Symbol.for('config'),
  logger: Symbol.for('logger'),

  // Service
  BikeService: Symbol.for('BikeService'),
  UserService: Symbol.for('UserService'),
  PartService: Symbol.for('PartService'),
  MaterialService: Symbol.for('MaterialService'),
  DefectService: Symbol.for('DefectService'),
  OrderService: Symbol.for('OrderService'),
  SchedulingService: Symbol.for('SchedulingService'),
  ProductionService: Symbol.for('ProductionService'),
  SaleService: Symbol.for('SaleService'),
  ShippingService: Symbol.for('ShippingService'),
  LogService: Symbol.for('LogService'),

  // Repository
  UserRepository: Symbol.for('UserRepository'),
  PartRepository: Symbol.for('PartRepository'),
  MaterialRepository: Symbol.for('MaterialRepository'),
  BikeRepository: Symbol.for('BikeRepository'),
  DefectRepository: Symbol.for('DefectRepository'),
  OrderRepository: Symbol.for('OrderRepository'),
  SchedulingRepository: Symbol.for('SchedulingRepository'),
  ProductionRepository: Symbol.for('ProductionRepository'),
  SaleRepository: Symbol.for('SaleRepository'),
  ShippingRepository: Symbol.for('ShippingRepository'),
  LogRepository: Symbol.for('LogRepository'),

  // Middlewares
  LoggerMiddleware: Symbol.for('LoggerMiddleware'),

  // Mongo
  MongoConnection: Symbol.for('MongoConnection'),

  // Mail
  SystemService: Symbol.for('SystemService'),
  Mail: Symbol.for('Mail'),
};

export default TYPES;
