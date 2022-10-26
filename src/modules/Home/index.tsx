import { Breadcrumb, Divider, Space } from "antd";
import AddTodo from "./components/FormAddTodo";
import TodoList from "./components/TodoList/index";
import useCreateTodo from "./hooks/useCreateTodo";
import useDeleteTodo from "./hooks/useDeleteTodo";
import useGetTodo from "./hooks/useGetTodo";
import useUpdateTodo from "./hooks/useUpdateTodo";

function Home() {
  const { data: todoList } = useGetTodo();
  
  const { mutate: postTodo} = useCreateTodo();
  const { mutate: deleteTodo} = useDeleteTodo();
  const { mutate: updateTodo} = useUpdateTodo();

  const handleSubmitTodo = (values: any) => {
    postTodo(values);
  };

  const handleCheck = (id: any) => {
    updateTodo(id);
  };
  const handleDelete = (id: any) => {
    deleteTodo(id);
  };
  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Todo</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380 }}
      >
        {/* Content */}

        <AddTodo handleSubmit={handleSubmitTodo} />

        <br />
        <div style={{ textAlign: "center" }}>
          <Space split={<Divider type="vertical" />}>
            <TodoList
              todoList={todoList}
              header="Todo"
              type="danger"
              todoStatus="new"
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
            <TodoList
              todoList={todoList}
              header="Done"
              type="success"
              todoStatus="completed"
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          </Space>
        </div>
      </div>
    </>
  );
}

export default Home;
