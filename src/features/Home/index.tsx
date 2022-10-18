import { Breadcrumb, Divider, Space, Button } from 'antd';
import { useEffect, useState } from 'react';
import AddTodo from './components/FormAddTodo';
import TodoList from './components/TodoList/index';
import { deleteTodo, getTodo, postTodo, updateTodo } from './services/routes';


function Home() {

    const [todoList, setTodoList] = useState([]);
    const [completedList, setCompletedList] = useState([]);
    const [onSubmit, setOnSubmit] = useState(false);
    const handleSubmitTodo = (values: any) => {
       
        postTodo(values);
        setOnSubmit(true);
    };

    useEffect(() => {
        getTodo('new').then((res) => {
            setTodoList(res.data)
        })

        getTodo('completed').then((res) => {
            setCompletedList(res.data)
        })
        setOnSubmit(false);
    }, [onSubmit])

    const handleCheck = (id: any) => {
        updateTodo(id);
        setOnSubmit(true)
    }
    const handleDelete = (id: any) => {
        deleteTodo(id);
        setOnSubmit(true)
    }
    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Todo</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                {/* Content */}

                <AddTodo handleSubmit={handleSubmitTodo} />

                <br />
                <div style={{ textAlign: 'center', }}>
                    <Space split={<Divider type="vertical" />} >
                        <TodoList todoList={todoList} header="Todo" type='danger' handleCheck={handleCheck} handleDelete={handleDelete} />
                        <TodoList todoList={completedList} header="Done" type='success' handleCheck={handleCheck} handleDelete={handleDelete} />
                    </Space>
                    
                </div>
            </div>
        </>
    )

};

export default Home;