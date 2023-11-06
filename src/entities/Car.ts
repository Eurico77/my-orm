import { column } from '../decorators/property.decorator';
import { entity } from '../decorators/entity.decorator';
import { Entity } from './BaseEntity';

@entity({ schema: 'public', table: 'cars' })
export class Car extends Entity {
  @column({ name: 'car_brand' })
  brand: string;
  @column({ name: 'car_model' })
  model: string;

  constructor(brand: string, model: string) {
    super();
    this.brand = brand;
    this.model = model;
  }


}