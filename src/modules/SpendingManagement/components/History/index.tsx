import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card, Divider, List, Space, Typography } from "antd";
import moment from "moment";
import PropTypes from "prop-types";
import { useState } from "react";
import ModalEdit from "../../../../components/Modal/Modal";
import { deleteSpending } from "../../services/routes";

function History(props: any) {
  const his = props.history;
  const handleEdit = props.handleEdit;
  const handleDelete = props.handleDelete;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <List.Item>
        <Card title={moment(his.datetime).format("DD/MM/YYYY hh:mm A")}>
          <Space align="center" size={14} split={<Divider type="vertical" />}>
            <Typography.Title level={5}>
              <Typography.Text type="danger">{his.action}</Typography.Text>{" "}
              <br />
              <Typography.Text>
                {his.money.toLocaleString()} <sub>đ</sub>
              </Typography.Text>
            </Typography.Title>
            <EditOutlined onClick={() => setIsModalOpen(true)} />
            <DeleteOutlined onClick={() => handleDelete(his._id)} />
          </Space>
        </Card>
      </List.Item>
      <ModalEdit
        modalOpen={isModalOpen}
        modalCancel={handleCancel}
        modalOk={handleEdit}
        editData={his}
      />
    </div>
  );
}

History.propTypes = {
  history: PropTypes.object,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default History;
