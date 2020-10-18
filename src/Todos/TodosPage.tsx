import React, { CSSProperties } from 'react';
import { TodoBar } from './TodoBar';
import { TodoItem } from './TodoItem';
import { TodoItems } from './TodoItems';

type TodosState = {
    items: TodoItem[]
};

export class TodosPage extends React.Component<{}, TodosState> {
    styles: CSSProperties = {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        paddingTop: '30vh',
        color: 'white',
    };

    constructor(props: {}) {
        super(props);
        this.state = {items: []};
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
    }

    get remainingTasks():number {
        return this.state.items.filter(i => !i.done).length;
    }

    addItem(item: TodoItem){
        this.state.items.splice(this.state.items.length,0,item);
        this.setState({items: this.state.items});
    }

    removeItem(item: TodoItem){
        const indexOf = this.state.items.indexOf(item);
        this.state.items.splice(indexOf,1);
        this.setState({items: this.state.items});
    }

    toggleDone(item: TodoItem){
        item.toggleDone();
        this.setState({items: this.state.items});
    }

    render = () =>
        <div style={this.styles}>
            <h1>Add Todo ({this.remainingTasks > 0 ? `${this.remainingTasks} to go`: `all done🎉`})</h1>
            <TodoBar onAdded={this.addItem} />
            <TodoItems
                items={this.state.items}
                onItemRemoved={this.removeItem}
                onItemToggledDone={this.toggleDone}
            />
        </div>
}