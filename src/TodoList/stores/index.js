import TodoInsert from './TodoInsert';
import TodoStore from './TodoStore';

class RootStore {
  constructor() {
    this.TodoInsert = new TodoInsert(this);
    this.TodoStore = new TodoStore(this);
  }
}

export default RootStore;