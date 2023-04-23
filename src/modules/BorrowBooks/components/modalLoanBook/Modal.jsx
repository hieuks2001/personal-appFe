import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
} from "antd";
import { useState } from "react";
import FormItem from "antd/es/form/FormItem";
import useGetItem from "./../../../AddItems/hooks/useGetItem";
import useGetLibr from "../../hooks/book/useGetLibr";
import useAddBookLoan from "./../../hooks/book/useAddBookLoan";
function ModalLoanBook(id) {
  const [open, setOpen] = useState(false);
  const { data: bookList } = useGetItem();
  const { data: lib } = useGetLibr();
  const { mutate: addBookLoan } = useAddBookLoan();
  const handleOnSubmit = (values) => {
    addBookLoan(values);
  };
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} style={{backgroundColor:"#6bd12b"}}>
        Add
      </Button>
      <Modal
        title="Thêm sách mượn"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={500}
        footer={false}
      >
        <Form
          layout="horizontal"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
          onFinish={handleOnSubmit}
          initialValues={{ borrowerCardNo: id.id }}
        >
          <FormItem name="borrowerCardNo" hidden></FormItem>
          <FormItem label="Tên sách" name="bookLoansBookId">
            <Select
              // showSearch
              style={{
                width: 200,
              }}
            >
              {bookList?.items.map((value) => {
                return (
                  <Select.Option
                    key={value?.bookTitle}
                    value={value?.bookBookId}
                  >
                    {value?.bookTitle}
                  </Select.Option>
                );
              })}
            </Select>
          </FormItem>
          <FormItem label="Thư viện" name="bookLoansBranchId">
            <Select
              // showSearch
              style={{
                width: 200,
              }}
            >
              {lib?.map((value) => {
                return (
                  <Select.Option
                    key={value?.libraryBranchBranchId}
                    value={value?.libraryBranchBranchId}
                  >
                    {value.libraryBranchBranchId === 1 ? (
                      <span>VKU</span>
                    ) : (
                      <span>UFL</span>
                    )}
                  </Select.Option>
                );
              })}
            </Select>
          </FormItem>
          <FormItem label="Ngày mượn" name="bookLoansDateOut">
            <DatePicker />
          </FormItem>
          <FormItem label="Hạn trả" name="bookLoansDueDate">
            <DatePicker />
          </FormItem>
          <FormItem wrapperCol={{ span: 14, offset: 4 }}>
            <Button type="primary" size="large" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </Modal>
    </>
  );
}

export default ModalLoanBook;
