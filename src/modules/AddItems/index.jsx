import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Form, Pagination, Select, Table } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { usePropsTablePagination } from "../../components/CustomPagination";
import ModalEdit from "./components/ModalEdit/Modal";
import useDeleteItem from "./hooks/useDeleteItem";
import useGetItem from "./hooks/useGetItem";
import useGetPublisher from "./hooks/useGetPublisher";
import useUpdateItem from "./hooks/useUpdateItem";
import { useAppSelector } from "../../hooks/reduxHook";

const App = () => {
  const { mutate: deleteItem } = useDeleteItem();
  const { mutate: updateItem } = useUpdateItem();
  const { data: bookList } = useGetItem();
  const { data: publisherList } = useGetPublisher();

  const handleDelete = (id) => {
    deleteItem(id);
  };
  const handleEdit = (values) => {
    const amountBookVku = {
      bookCopiesBranchId: values?.bookCopiesBranchIdVku,
      bookCopiesNoOfCopies: values?.bookCopiesNoOfCopiesVku,
    };
    const amountBookUFL = {
      bookCopiesBranchId: values?.bookCopiesBranchIdUFL,
      bookCopiesNoOfCopies: values?.bookCopiesNoOfCopiesUFL,
    };
    const infoBook = {
      token: values?.token,
      bookBookId: values?.bookBookId,
      bookTitle: values?.bookTitle,
      bookPublisherName: values?.bookPublisherName,
      tblBookCopies:[amountBookVku,amountBookUFL]
    };
    console.log(infoBook);

    updateItem(infoBook);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [modaldata, setmodaldata] = useState();

  const columns = [
    {
      title: "Tên sách",
      dataIndex: "bookTitle",
      key: "bookTitle",
      render: (text) => text,
    },
    {
      title: "NXB",
      dataIndex: "bookPublisherName",
      key: "bookPublisherName",
    },
    {
      title: "Tác giả",
      dataIndex: "tblBookAuthors",
      key: "tblBookAuthors",
      render: (text) => <span>{text[0]?.bookAuthorsAuthorName}</span>,
    },
    {
      title: "Số lượng sách",
      children: [
        {
          title: "VKU",
          dataIndex: "tblBookCopies",
          key: "tblBookCopies",
          render: (text) => <span>{text[0]?.bookCopiesNoOfCopies}</span>,
        },
        {
          title: "Ngoại ngữ",
          dataIndex: "tblBookCopies",
          key: "tblBookCopies",
          render: (text) => <span>{text[1]?.bookCopiesNoOfCopies}</span>,
        },
      ],
    },
    {
      title: "Action",
      key: "status",
      render: (index, record) => (
        <>
          <EditOutlined onClick={() => showModal(record)} />
          <DeleteOutlined
            style={{ marginLeft: "20px", color: "red" }}
            onClick={() => handleDelete(record.bookBookId)}
          />
        </>
      ),
    },
  ];
  const showModal = (record) => {
    console.log(modaldata);
    setmodaldata(record);
    setIsModalOpen(true);
  };

  const { paginateTableOption } = usePropsTablePagination();

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
          <Input placeholder="Tên sách" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Tác giả" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Loại sách" />
        </Form.Item>
        <Form.Item>
          <DatePicker placeholder="Ngày nhập" />
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
        <Link to="/them-hang">Add new</Link>
      </Button>

      <br />
      <Table
        columns={columns}
        dataSource={bookList?.items}
        pagination={
          <Pagination defaultCurrent={1} total={bookList?.items.count} />
        }
      />
      <ModalEdit
        key={modaldata?.bookBookId}
        modalOpen={isModalOpen}
        modalCancel={handleCancel}
        modalOk={handleEdit}
        editData={modaldata}
        publisherData={publisherList}
      />
    </div>
  );
};

export default App;
