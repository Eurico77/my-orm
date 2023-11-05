import { Entity } from './BaseEntity';
import { Connection } from './Connection';

export class ORM {

  constructor(readonly connection: Connection) { }

  async save(entity: Entity) {
    console.log(entity.columns);
    const columns = entity.columns.map(c => c.column).join(',');
    const params = entity.columns.map((c, i) => `$${i + 1}`).join(',');
    const values = entity.columns.map(c => entity[c.property]);
    const statement = `
    insert into ${entity.schema}.${entity.table} (${columns}) values (${params})`;
    await this.connection.query(statement, [...values]);
  }
}