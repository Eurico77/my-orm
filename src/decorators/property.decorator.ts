import { Entity } from '../BaseEntity';

export function column(config: { name: string }) {
  return (target: Entity, propertyKey: string) => {
    target.columns = target.columns || [];
    target.columns.push({ property: propertyKey, column: config.name });
  };
}