import { Entity } from '../BaseEntity';

export function column(config: { name: string }) {
  return (target: Entity, propertyKey: string) => {
    console.log('property key:', propertyKey);
    console.log('config.name:', config.name);
    target.columns = target.columns || [];
    target.columns.push({ property: propertyKey, column: config.name });
  };
}