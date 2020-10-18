import React from 'react';
import { TodoBarParams } from './TodoBar';


export function TodoItems({ items }: TodoBarParams) {

    const style: React.CSSProperties = {
        listStyleType: 'none',
        fontSize: 'calc(10px + 2vmin)',
    };
    const allTodos = items.map((i, index) => <li key={i.todo}>{index + 1}. {i.todo}</li>);
    return (
        <ul style={style}>{allTodos}</ul>
    );
}
