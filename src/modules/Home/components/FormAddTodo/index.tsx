import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber, Typography
} from "antd";
import FormItem from "antd/es/form/FormItem";
import PropTypes from "prop-types";

function AddTodo(props: any) {
  const handleSubmit = props.handleSubmit;
  return (
    <>
      <Typography.Title level={4} type="danger">
        KH / người thuê
      </Typography.Title>
      <Form
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 10 }}
        layout="horizontal"
        onFinish={handleSubmit}
        autoComplete="off"
        initialValues={{ status: "new" }}
      >
        <FormItem label="Tên KH/người thuê" name="user_name">
          <Input />
        </FormItem>
        <FormItem label="Địa chỉ" name="address">
          <Input />
        </FormItem>
        <FormItem label="SĐT" name="phone">
          <Input />
        </FormItem>
        <FormItem label="CCCD" name="cccd">
          <Input />
        </FormItem>
        <FormItem label="Tên sách" name="name">
          <Input />
        </FormItem>
        <FormItem label="Tác giả" name="author">
          <Input />
        </FormItem>
        <FormItem label="Loại sách" name="type">
          <Input />
        </FormItem>
        <FormItem label="Số tiền" name="money">
          <InputNumber
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
            style={{ width: 140 }}
          />
        </FormItem>
        <FormItem label="NXB" name="nxb">
          <Input />
        </FormItem>
        <FormItem
          label="Thời gian mượn"
          name="datetime"
          wrapperCol={{ span: 8 }}
        >
          <DatePicker showTime />
        </FormItem>
        <FormItem>
          <Button type="primary" size="middle" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    </>
  );
}

AddTodo.propTypes = {
  handleSubmit: PropTypes.func,
};

export default AddTodo;
