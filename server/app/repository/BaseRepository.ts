import { Logger } from 'winston';
import { MongoConnection } from '../utils/MongoConnection';
import mongoose, { Model, Document, Schema } from 'mongoose';
import { inject, injectable } from 'inversify';
import TYPES from '../constants/types';

@injectable()
export abstract class BaseRepository<T extends Document> {
  protected abstract collectionName: string;
  protected abstract schema: Schema;
  private _model?: mongoose.Model<T>;
  @inject(TYPES.logger) protected logger: Logger;

  constructor(
    @inject(TYPES.MongoConnection)
    protected readonly connection: MongoConnection
  ) {}

  public async initialize(): Promise<void> {
    // create the collection for every sub class if not done already
    this._model = await this.connection.getModel<T>(this.collectionName, this.schema);
  }

  protected manageRepositoryError(e: Error): never {
    // eventually do something here
    this.logger.warn(e.message);
    throw e;
  }

  get model(): Model<T> {
    if (!this._model) throw new Error('Repository not initialized');

    return this._model;
  }

  public async getList(): Promise<T[]> {
    try {
      return await this.model.find();
    } catch (e) {
      this.manageRepositoryError(e);
    }
  }

  public async create(model: T): Promise<T> {
    try {
      return await this.model.create(model);
    } catch (e) {
      this.manageRepositoryError(e);
    }
  }

  public async findById(id: string): Promise<T | null> {
    try {
      return await this.model.findById(id);
    } catch (e) {
      this.manageRepositoryError(e);
    }
  }
}
