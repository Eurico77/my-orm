import { Book } from "./Entities";


export class Entity {

}


export class ORM {

  async save(entity: Entity) { }
}







async function init() {
  const book = new Book('Clean code', 'Robert Martin');
  const orm = new ORM();
  await orm.save(book);
}

init();