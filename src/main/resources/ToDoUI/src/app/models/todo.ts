export class Todo {
  id: number;
  title: string = '';
  body: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
