import { List, Typography } from 'antd';
import PropTypes from 'prop-types'
import Todo from '../Todo/index';

function TodoList(props: any) {

    const todoList = props.todoList;
    const header = props.header;
    const type = props.type;
    const handleCheck = props.handleCheck;
    const handleDelete = props.handleDelete;
    return (
        <>
            <List
                header={<Typography.Title type={type} level={4}>{header}</Typography.Title>}
                bordered
                dataSource={todoList}
                renderItem={(todo: any) => (
                    <Todo todo={todo} handleCheck={handleCheck} handleDelete={handleDelete} />
                )}
            >
            </List>
        </>

    )
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    header: PropTypes.string.isRequired,
    type: PropTypes.string,
    handleCheck: PropTypes.func,
    handleDelete: PropTypes.func,
}

TodoList.defaultProps = {
    todoList: [],
    type: null
}
export default TodoList;
