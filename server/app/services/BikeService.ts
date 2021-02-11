import { IBike } from './../models/BikeModel';
import { BikeRepository } from './../repository/BikeRepository';
import { inject, injectable } from 'inversify';
import TYPES from '../constants/types';

@injectable()
export class BikeService {
  constructor(@inject(TYPES.BikeRepository) private bikeRepo: BikeRepository) {}

  public async getBikes(): Promise<IBike[]> {
    return await this.bikeRepo.getList();
  }

  public async createBike(body: IBike): Promise<IBike> {
    return await this.bikeRepo.create(body);
  }

  // public async updateBike(body: IBike): Promise<IBike> {

  //   const updatedBike = await this.bikeRepo.updateByName(name, body);
  //   if (!updatedBike) {
  //     throw new NotFoundError(`Bike with name ${name} was not found`);
  //   }

  //   return updatedMaterial;
  // }

  // public async deleteBike(body: IBike): Promise<IBike> {
  //   return await this.bikeRepo.delete(body);
  // }
}
