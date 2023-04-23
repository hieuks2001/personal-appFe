import { Button, Modal, Table } from "antd";
import useGetBorrowBooks from "../../hooks/book/useGetBorrowBooks";
import { useState } from "react";
import moment from "moment";
import { DeleteOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { returnBook } from "./../../services/routes";
import useReturnBook from "../../hooks/book/useReturnBook";

function ModalShowBook(id) {
  const [open, setOpen] = useState(false);
  const { data: bookBorrowList } = useGetBorrowBooks(id.id);
  const { mutate: updateBorrowers } = useReturnBook();

  const columns = [
    {
      title: "Tên sách",
      dataIndex: "bookLoansBook",
      key: "bookLoansBook",
      render: (text) => <span>{text.bookTitle}</span>,
    },
    {
      title: "NXB",
      dataIndex: "bookLoansBook",
      key: "bookLoansBook",
      render: (text) => <span>{text.bookPublisherName}</span>,
    },
    {
      title: "Thư viện",
      dataIndex: "bookLoansBranch",
      key: "bookLoansBranch",
      render: (text) => {
        // return <span>{text.libraryBranchBranchName}</span>
        return text.libraryBranchBranchId === 1 ? (
          <span>VKU</span>
        ) : (
          <span>UFL</span>
        );
      },
    },

    {
      title: "Ngày mượn",
      key: "bookLoansDateOut",
      dataIndex: "bookLoansDateOut",
      render: (text) => <span>{moment(text).format("DD/MM/YYYY")}</span>,
    },
    {
      title: "Hạn trả",
      key: "bookLoansDueDate",
      dataIndex: "bookLoansDueDate",
      render: (text) => <span>{moment(text).format("DD/MM/YYYY")}</span>,
    },
    {
      title: "Action",
      key: "bookLoansStatus",
      render: (index, record) => {
        return (
          record.bookLoansStatus !== 1 && (
            <Button
              type="default"
              style={{ backgroundColor: "#6be16b" }}
              onClick={() => returnBook(record)}
            >
              Trả sách
            </Button>
          )
        );
      },
    },
  ];
  const returnBook = (values) => {
    // console.log(values);
    updateBorrowers(values);
  };
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Show
      </Button>
      <Modal
        title="Danh sách "
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={false}
      >
        <Table columns={columns} dataSource={bookBorrowList || null} />
      </Modal>
    </>
  );
}

export default ModalShowBook;
