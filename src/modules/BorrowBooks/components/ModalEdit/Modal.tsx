import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
} from "antd";
import FormItem from "antd/es/form/FormItem";
import PropTypes from "prop-types";

function ModalEdit(props: any) {
  const modalOpen = props.modalOpen;
  const modalCancel = props.modalCancel;
  const data = props.editData;
  const modalOk = props.modalOk;

  return (
    <Modal title="Edit" open={modalOpen} onCancel={modalCancel} footer={false}>
      <Form
        layout="horizontal"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        onFinish={modalOk}
        initialValues={data}
      >
        <FormItem name="borrowerCardNo" hidden></FormItem>
        <FormItem label="Tên khách hàng" name="borrowerBorrowerName">
          <Input />
        </FormItem>
        <FormItem label="Số điện thoại" name="borrowerBorrowerPhone">
          <InputNumber  style={{width:"150px"}}/>
        </FormItem>
        <FormItem label="Địa chỉ" name="borrowerBorrowerAddress">
          <Input />
        </FormItem>
        
        <FormItem wrapperCol={{ span: 14, offset: 4 }}>
          <Button type="primary" size="large" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
}

ModalEdit.propTypes = {
  modalOpen: PropTypes.bool,
  editData: PropTypes.object,
  modalCancel: PropTypes.func,
  modalOk: PropTypes.func,
};

export default ModalEdit;
