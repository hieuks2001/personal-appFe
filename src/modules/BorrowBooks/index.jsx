import React, { useState } from "react";
import { Button, Form, Input, Select, Space, Table, Tag, Modal } from "antd";
import { Link } from "react-router-dom";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import useCreateBorrowBook from "./hooks/user/useCreateBorrowBook";
import useDeleteBorrowBook from "./hooks/user/useDeleteBorrowBook";
import useUpdateBorrowBook from "./hooks/user/useUpdateBorrowBook";
import useGetBorrowBook from "./hooks/user/useGetBorrowBook";
import ModalEdit from "./components/ModalEdit/Modal";
import ModalShowBook from "./components/ModalShowBooksLoan";
import ModalLoanBook from "./components/modalLoanBook/Modal";
const { confirm } = Modal;

const App = () => {
  const { mutate: postItem } = useCreateBorrowBook();
  const { mutate: deleteItem } = useDeleteBorrowBook();
  const { mutate: updateItem } = useUpdateBorrowBook();
  const { data: userList } = useGetBorrowBook();

  const handleDelete = (id) => {
    deleteItem(id);
  };
  const handleEdit = (values) => {
    updateItem(values);
  };

  const onSubmitForm = (values) => {
    postItem(values);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [modaldata, setmodaldata] = useState([]);

  const columns = [
    {
      title: "Tên khách hàng",
      dataIndex: "borrowerBorrowerName",
      key: "borrowerBorrowerName",
      render: (text) => text,
    },
    {
      title: "SĐT",
      dataIndex: "borrowerBorrowerPhone",
      key: "borrowerBorrowerPhone",
    },
    {
      title: "Địa chỉ",
      dataIndex: "borrowerBorrowerAddress",
      key: "borrowerBorrowerAddress",
    },

    {
      title: "Sách mượn",
      key: "borrowerCardNo",
      dataIndex: "borrowerCardNo",
      render: (text) => (
        // <Button type="primary" onClick={() => showModalBook}>
        //   Show
        // </Button>
        <ModalShowBook id={text} />
      ),
    },
    {
      title: "Mượn sách",
      key: "borrowerCardNo",
      dataIndex: "borrowerCardNo",
      render: (text) => (      
        <ModalLoanBook id={text} />
      ),
    },
    {
      title: "Action",
      key: "status",
      render: (index, record) => (
        <>
          <EditOutlined onClick={() => showModal(record)} />
          <DeleteOutlined
            style={{ marginLeft: "20px", color: "red" }}
            onClick={() => {
              showDeleteConfirm(record);
            }}
          />
        </>
      ),
    },
  ];
  const showDeleteConfirm = (record) => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleFilled />,
      content: "Bạn chắc chắn muốn xoá chứ!?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteItem(record.borrowerCardNo);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const showModal = (record) => {
    setmodaldata(record);
    setIsModalOpen(true);
  };
  const showModalBook = (record) => {
    <ModalShowBook id={record} />;
  };
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 380 }}
    >
      {/* <Form
        layout={"inline"}
        initialValues={{
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }}
        //   onValuesChange={onFormLayoutChange}
      >
        <Form.Item>
          <Input placeholder="Tên khách hàng" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="SĐT" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Địa chỉ" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="CCCD/CMND" />
        </Form.Item>
        <Form.Item>
          <Select
            placeholder="Trạng thái thanh toán"
            options={[
              {
                value: "no",
                label: "Chưa thanh toán",
              },
              {
                value: "yes",
                label: "Đã thanh toán",
              },
            ]}
          ></Select>
        </Form.Item>
        <Button type="primary">Search</Button>
      </Form> */}
      <br />
      <Button style={{ backgroundColor: "green" }}>
        <Link to="/add">Add new</Link>
      </Button>

      <br />
      <Table columns={columns} dataSource={userList?.items || null} />
      <ModalEdit
        modalOpen={isModalOpen}
        modalCancel={handleCancel}
        modalOk={handleEdit}
        editData={modaldata}
      />
    </div>
  );
};

export default App;
