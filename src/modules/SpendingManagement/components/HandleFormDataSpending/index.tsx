import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Typography,
} from "antd";
import FormItem from "antd/es/form/FormItem";
import PropTypes from "prop-types";

function FormSpending(props: any) {
  const onSubmit = props.onSubmitForm;
  return (
    <div>
      <Typography.Title level={4} type="danger">
        Nhập sách
      </Typography.Title>

      <Form
        layout="horizontal"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ type: "payments" }}
        onFinish={onSubmit}
        autoComplete="off"
      >
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
        <FormItem label="Thời gian nhập" name="datetime" wrapperCol={{ span: 8 }}>
          <DatePicker showTime />
        </FormItem>
        <FormItem wrapperCol={{ span: 14, offset: 4 }}>
          <Button type="primary" size="large" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}

FormSpending.propTypes = {
  onSubmitForm: PropTypes.func,
};

export default FormSpending;
