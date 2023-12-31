type Config = {
  schema: string,
  table: string
}

export function entity(config: Config) {
  return (constructor: Function) => {
    console.log(constructor);
    constructor.prototype.schema = config.schema;
    constructor.prototype.table = config.table;
  };
}