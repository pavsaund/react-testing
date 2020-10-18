import React, { CSSProperties } from 'react';

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

    constructor(props: {}, state: TodosState) {
        super(props, state);
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

export class TodoBar extends React.Component<{onAdded: (item: TodoItem) => void}, {value: string}> {
    private styles: CSSProperties = {
        fontSize: 'calc(20px + 2vmin)',
        width: '60vmin',
        color: '#000',
    };

    constructor(props: {onAdded: (item: TodoItem) => void}) {
        super(props);
        this.state = {value: ''};

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeypress = this.handleKeypress.bind(this);
    }


    handleChange(e: React.ChangeEvent<HTMLInputElement>){
        this.setState({value: e.target.value});
    }

    handleKeypress(e: React.KeyboardEvent<HTMLInputElement>) {
        if(e.key === 'Enter') {
            this.handleAdd();
        }
    }

    handleAdd() {
        let item = new TodoItem();
        item.todo = this.state.value;
        this.props.onAdded(item);
        this.setState({value: ''});
    }

    render(){
        return (
        <>
            <input
                className="search-bar"
                style={this.styles}
                value={this.state.value}
                onKeyPress={this.handleKeypress}
                onChange={this.handleChange}
            ></input>
            <button onClick={this.handleAdd}>Add</button>
        </>
    )};
}
type TodoBarParams = {
    items: TodoItem[];

};

function TodoItems({items}: TodoBarParams){

    const allTodos = items.map((i) => <li key={i.todo}>{i.todo}</li>)
    const style: React.CSSProperties = {
        listStyleType: 'none',
    }
    return (
        <ul style={style}>{allTodos}</ul>
    );
}

export class TodoItem {
    todo: string = '';
    created: Date = new Date();

    get key(): string {
        return this.todo.toString();
    }
}