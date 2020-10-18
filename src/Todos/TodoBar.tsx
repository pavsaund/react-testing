import React, { CSSProperties } from 'react';
import { TodoItem } from './TodoItem';

export type TodoBarProps = {
    items: TodoItem[];

};

export class TodoBar extends React.Component<{ onAdded: (item: TodoItem) => void; }, { value: string; }> {
    private inputStyle: CSSProperties = {
        fontSize: 'calc(10px + 2vmin)',
        width: '60vmin',
        color: '#000',
    };
    private buttonStyle: CSSProperties = {
        fontSize: 'calc(10px + 2vmin)',
        marginLeft: '1rem',
        backgroundColor: 'teal',
        border: 0,
    };

    constructor(props: { onAdded: (item: TodoItem) => void; }) {
        super(props);
        this.state = { value: '' };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeypress = this.handleKeypress.bind(this);
    }


    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: e.target.value });
    }

    handleKeypress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (this.state.value && e.key === 'Enter') {
            this.handleAdd();
        }
    }

    handleAdd() {
        let item = new TodoItem();
        item.todo = this.state.value;
        this.props.onAdded(item);
        this.setState({ value: '' });
    }

    render() {
        return (
            <>
                <input
                    className="search-bar"
                    style={this.inputStyle}
                    value={this.state.value}
                    onKeyPress={this.handleKeypress}
                    onChange={this.handleChange}
                ></input>
                <button disabled={!this.state.value} style={this.buttonStyle} onClick={this.handleAdd}>Add</button>
            </>
        );
    };
}
