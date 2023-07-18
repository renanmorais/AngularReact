import React from 'react';
import './App.css';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Todo({todo, index, markTodo, removeTodo}) {
    return (
        <div
            className="todo"

        >
            <span style={{textDecoration: todo.isDone ? 'line-through' : ''}}>{todo.text}</span>
            <div>
                <Button variant={todo.isDone ? '' : 'outline-success'} onClick={() => markTodo(index)}>✓
                    Done</Button>{' '}
                <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕ Delete</Button>
            </div>
        </div>
    );
}

function FormTodo({addTodo}) {
    const [value, setValue] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><b>Add Todo</b></Form.Label>
                <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)}
                              placeholder="Digite aqui"/>
            </Form.Group>
            <Button variant="primary mb-3" type="submit">
                Submit
            </Button>
        </Form>
    );
}

function App() {
    const [todos, setTodos] = React.useState([
        {
            text: 'This is a sampe todo',
            isDone: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    };

    const markTodo = index => {
        const newTodos = [...todos];

        if (newTodos[index].isDone) {
            newTodos[index].isDone = false
        } else {
            newTodos[index].isDone = true;
        }
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <Header/>
            <div className="app">
                <div className="container">
                    <Card className="card-index">
                        <CardContent>
                            <h1 className="text-center mb-4">React Todo List</h1>
                            <FormTodo addTodo={addTodo}/>
                            <div>
                                {todos.map((todo, index) => (
                                    <Card>
                                        <Card.Body className={
                                            todo.isDone ? 'cardDone' : ''
                                        }>
                                            <Todo
                                                key={index}
                                                index={index}
                                                todo={todo}
                                                markTodo={markTodo}
                                                removeTodo={removeTodo}
                                            />
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default App;
