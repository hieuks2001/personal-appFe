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
import useGetPublisher from './../../hooks/useGetPublisher';

function FormAddItems(props: any) {
  const onSubmit = props.onSubmitForm;
  const token = useAppSelector((state) => state.auth.user);
  const { data: publisherList } = useGetPublisher(7116);
  
  return (
    <div>
      <Typography.Title level={4} type="danger">
        Nhập sách
      </Typography.Title>

      <Form
        layout="horizontal"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ token: token }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <FormItem name="token" hidden >
          <Input />
        </FormItem>
        <FormItem label="Tên sách" name="bookTitle">
          <Input />
        </FormItem>
        <FormItem label="NXB" name="bookPublisherName">
          <Select
          // options={publiserList?.map((value:any) => {
          //   return [
          //     {
          //       value: value?.publisherPublisherName,
          //       key: value?.publisherPublisherName,
          //     },
          //   ];
          // })}
          >
            {publisherList?.map((value:any) => {
              return (
                <Select.Option
                  key={value?.publisherPublisherName}
                  value={value?.publisherPublisherName}
                >
                  {value?.publisherPublisherName}
                </Select.Option>
              );
            })}
          </Select>
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

FormAddItems.propTypes = {
  onSubmitForm: PropTypes.func,
};

export default FormAddItems;
