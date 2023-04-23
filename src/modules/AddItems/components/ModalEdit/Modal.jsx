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
import { useAppSelector } from "../../../../hooks/reduxHook";

function ModalEdit(props) {
  const modalOpen = props.modalOpen;
  const modalCancel = props.modalCancel;
  const data = props.editData;
  const publiserList = props.publisherData;
  const token = useAppSelector((state) => state.auth.user);

  const modalOk = props.modalOk;
  return (
    <Modal title="Edit" open={modalOpen} onCancel={modalCancel} footer={false}>
      <Form
        preserve={false}
        layout="horizontal"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
        onFinish={modalOk}
        initialValues={{
          token: token,
          bookBookId: data?.bookBookId,
          bookTitle: data?.bookTitle,
          bookPublisherName: data?.bookPublisherName,
          tblBookAuthors: data?.tblBookAuthors?.[0]?.bookAuthorsAuthorName,
          bookCopiesNoOfCopiesVku:
            data?.tblBookCopies?.[0]?.bookCopiesNoOfCopies,
          bookCopiesNoOfCopiesUFL:
            data?.tblBookCopies?.[1]?.bookCopiesNoOfCopies,
          bookCopiesBranchIdVku: data?.tblBookCopies?.[0]?.bookCopiesBranchId,
          bookCopiesBranchIdUFL: data?.tblBookCopies?.[1]?.bookCopiesBranchId,
        }}
      >
        <FormItem name="bookBookId" hidden></FormItem>
        <FormItem name="token" hidden></FormItem>

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
            {publiserList?.map((value) => {
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
        <FormItem label="Tác giả" name="tblBookAuthors">
          <Input />
        </FormItem>
        <FormItem name="bookCopiesBranchIdVku" hidden></FormItem>
        <FormItem name="bookCopiesBranchIdUFL" hidden></FormItem>
        <FormItem label="Số lượng sách VKU" name="bookCopiesNoOfCopiesVku">
          <InputNumber />
        </FormItem>
        <FormItem label="Số lượng sách UFL" name="bookCopiesNoOfCopiesUFL">
          <InputNumber />
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
  publisherData: PropTypes.array,

  modalCancel: PropTypes.func,
  modalOk: PropTypes.func,
};

export default ModalEdit;
