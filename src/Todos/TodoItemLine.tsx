import React, { CSSProperties } from 'react';
import { TodoItem } from './TodoItem';

type TodoItemLineProps = {
    item: TodoItem;
    index: number;
    onRemove: (item: TodoItem) => void;
    onToggledDone: (item: TodoItem) => void;
};

export function TodoItemLine(props: TodoItemLineProps) {
    const removeButtonStyle: CSSProperties = {
        border: 0,
        backgroundColor: 'transparent',
        textAlign: 'center',
        verticalAlign: 'center',
        cursor: 'pointer',
        fontSize: 'calc(10px + 2vmin)',
        fontWeight: 'bolder',
        color: 'deeppink',
    };

    const handleRemove = function() {
        props.onRemove(props.item);
    };

    const toggleDone = function() {
        props.onToggledDone(props.item);
    };

    return (
        <li className={props.item.done ? 'done': ''}>
            <span onClick={toggleDone}>{props.index + 1}.{props.item.todo}</span>
            <button
                className="removeButton"
                style={removeButtonStyle}
                title="Remove Todo"
                onClick={handleRemove}
            >x</button>
        </li>
    );
}
