type Columns = {
  property: string;
  column: string;
}

export class Entity {
  constructor() {
    console.log(this.columns);
  }
  declare schema: string;
  declare table: string;
  declare columns: Columns[];
  [key: string]: any
}
