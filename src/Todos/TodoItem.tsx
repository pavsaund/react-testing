
export class TodoItem {

    todo: string = '';
    created: Date = new Date();
    done: boolean = false;

    get key(): string {
        return this.todo.toString();
    }

    toggleDone() {
        this.done = !this.done;
    }
}
