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
    }

    addItem(item: TodoItem){
        this.state.items.splice(this.state.items.length,0,item);
        this.setState({items: this.state.items});
    }
    render = () =>
        <div style={this.styles}>
            <h1>Add Todo</h1>
            <TodoBar onAdded={this.addItem} />
            <TodoItems items={this.state.items}/>
        </div>
}