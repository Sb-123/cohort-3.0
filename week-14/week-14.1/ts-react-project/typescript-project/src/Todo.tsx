interface TodoType {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

interface TodoInput {
    todo: TodoType;

}

function Todo(props: TodoInput): JSX.Element {
    return (
        <div>
            
            <h1>{props.todo.title}</h1>
            <h2>{props.todo.description }</h2>
        </div>
    )
}

export default Todo;
