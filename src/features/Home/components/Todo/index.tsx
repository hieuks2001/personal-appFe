import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, List, Space, Typography } from 'antd'
import { EditOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';

function Todo(props: any) {
    const todo = props.todo;
    const handleCheck = props.handleCheck;
    const handleDelete = props.handleDelete;
    return (
        <>

            <List.Item key={todo._id} >
                <Space split={<Divider type="vertical" />}>
                    <Typography.Text type='danger'>{todo.action}</Typography.Text>
                    {(todo.status != 'new') ?
                        <DeleteOutlined onClick={() => handleDelete(todo._id)} /> :
                        <><CheckOutlined onClick={() => handleCheck(todo._id)} /><DeleteOutlined onClick={() => handleDelete(todo._id)} /></>
                    }
                </Space>
            </List.Item>
        </>
    )
}

Todo.propTypes = {
    todo: PropTypes.object,
    handleCheck: PropTypes.func,
    handleDelete: PropTypes.func
}
Todo.defaultProps = {
    todo: []
}
export default Todo
