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
import { useAppSelector } from "../../../../hooks/reduxHook";

function FormAddBorrower(props:any) {
  const handleSubmit = props.handleSubmit;
  const token = useAppSelector((state) => state.auth.user);

  return (
    <>
      <Typography.Title level={4} type="danger">
        Người thuê
      </Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 10 }}
        layout="horizontal"
        onFinish={handleSubmit}
        autoComplete="off"
        initialValues={{token:token}}
      >
        <FormItem hidden name={"token"} />

        <FormItem label="Tên người thuê" name="borrowerBorrowerName">
          <Input />
        </FormItem>
        <FormItem label="Địa chỉ" name="borrowerBorrowerAddress">
          <Input />
        </FormItem>
        <FormItem label="SĐT" name="borrowerBorrowerPhone">
          <Input />
        </FormItem>
        {/* <FormItem label="Chọn thư viện">
          <Select
            placeholder="Chọn thư viện"
            style={{ width: 150 }}
            // onChange={handleSelectServer}
            // value={value}
            key={"serrver"}
          >
            <Select.Option key={"VKU"} value="7116">
              VKU
            </Select.Option>
            <Select.Option key={"NN"} value="7117">
              Ngoại ngữ
            </Select.Option>
            <Select.Option key={"DHDN"} value="7118">
              ĐH ĐN
            </Select.Option>
          </Select>
        </FormItem> */}
        <FormItem>
          <Button type="primary" size="middle" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    </>
  );
}

FormAddBorrower.propTypes = {
  handleSubmit: PropTypes.func,
};

export default FormAddBorrower;
