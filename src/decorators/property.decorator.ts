import { Entity } from '../entities/BaseEntity';

export function column(config: { name: string }) {
  return (target: Entity, propertyKey: string) => {
    console.log(`entity: ${target} with properties: ${propertyKey}`);
    target.columns = target.columns || [];
    target.columns.push({ property: propertyKey, column: config.name });
  };
}