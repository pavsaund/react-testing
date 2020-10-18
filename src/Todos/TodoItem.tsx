
export class TodoItem {
    todo: string = '';
    created: Date = new Date();

    get key(): string {
        return this.todo.toString();
    }
}
