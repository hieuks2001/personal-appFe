import { List, Typography } from "antd";
import PropTypes from "prop-types";
import Todo from "../Todo/index";

function TodoList(props: any) {
  const todoList = props.todoList;
  const header = props.header;
  const type = props.type;
  const todoStatus = props.todoStatus;
  const handleCheck = props.handleCheck;
  const handleDelete = props.handleDelete;
  function Status(todo: any) {
    if (todo.status === todoStatus) {
      return (
        <Todo
          todo={todo}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      );
    }
  }
  return (
    <>
      <List
        header={
          <Typography.Title type={type} level={4}>
            {header}
          </Typography.Title>
        }
        bordered
        dataSource={todoList}
        renderItem={(todo: any) => Status(todo)}
      ></List>
    </>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  header: PropTypes.string.isRequired,
  type: PropTypes.string,
  todoStatus: PropTypes.string.isRequired,
  handleCheck: PropTypes.func,
  handleDelete: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  type: null,
};
export default TodoList;
