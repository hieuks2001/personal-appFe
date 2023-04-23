import { Col, Row, Typography } from "antd";
import moment from "moment";
import FormSpending from "./components/HandleFormDataSpending";
import HistoryList from "./components/HistoryList";
import useCreateSpend from "./hooks/useCreateSpend";
import useGetSpend from "./hooks/useGetSpend";
import useDeleteSpend from "./hooks/useDeleteSpend";
import useUpdateSpend from "./hooks/useUpdateSpend";
import { useState } from "react";

function SpendingManagement() {
  // const { data: spendList } = useGetSpend();
  const spendList = useState([]);
  const { mutate: postSpend } = useCreateSpend();
  const { mutate: deleteSpending } = useDeleteSpend();
  const { mutate: updateSpend } = useUpdateSpend();

  const handleDelete = (id: any) => {
    deleteSpending(id);
  };
  const handleEdit = (values: any) => {
    updateSpend(values);
  };

  const onSubmitForm = (values: any) => {
    postSpend(values);
  };

  const date = moment(new Date()).format("DD/MM/YYYY");
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 380 }}
    >
      <br />

      <Row gutter={24}>
        <Col span={12}>
          <FormSpending onSubmitForm={onSubmitForm} />
        </Col>

        <Col span={12}>
          <Typography.Title level={2} type="warning">
            {date}
          </Typography.Title>
          <Typography.Title level={3} type="danger">
            Sách đã nhập hôm nay
          </Typography.Title>
          <HistoryList
            historyList={spendList}
            typeSpend="payments"
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />

          <hr />
        </Col>
      </Row>
    </div>
  );
}

export default SpendingManagement;
