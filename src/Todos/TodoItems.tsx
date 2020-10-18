import React from 'react';
import { TodoItem } from './TodoItem';
import { TodoItemLine } from './TodoItemLine';
import "./TodoItemLine.css";

type TodoItemsProps = {
    items: TodoItem[];
    onItemRemoved: (item: TodoItem) => void;
};

export function TodoItems(props: TodoItemsProps) {

    const style: React.CSSProperties = {
        listStyleType: 'none',
        fontSize: 'calc(10px + 2vmin)',
    };
    const allTodos = props.items.map((i, index) =>
        <TodoItemLine
            key={i.todo}
            item={i}
            index={index}
            onRemove={props.onItemRemoved}
        />);
    return (
        <ul style={style}>{allTodos}</ul>
    );
}


