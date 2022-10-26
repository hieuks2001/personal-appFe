import { Col, Row, Typography } from "antd";
import moment from "moment";
import FormSpending from "./components/HandleFormDataSpending";
import HistoryList from "./components/HistoryList";
import useCreateSpend from "./hooks/useCreateSpend";
import useGetSpend from "./hooks/useGetSpend";
import useDeleteSpend from "./hooks/useDeleteSpend";
import useUpdateSpend from "./hooks/useUpdateSpend";

function SpendingManagement() {
  const { data: spendList } = useGetSpend();
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
    <>
      <br />
      <Row gutter={24}>
        <Col span={8}>
          <FormSpending onSubmitForm={onSubmitForm} />
        </Col>

        <Col span={14}>
          <Typography.Title level={2} type="warning">
            {date}
          </Typography.Title>
          <Typography.Title level={3} type="danger">
            Chi tiêu hôm nay
          </Typography.Title>
          <HistoryList
            historyList={spendList}
            typeSpend="payments"
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
          <Typography.Title level={4} style={{ color: "000" }}>
            Tổng chi tiêu:
            <sub>đ</sub>
          </Typography.Title>

          <hr />
          <Typography.Title level={3} type="danger">
            Thu nhập hôm nay
          </Typography.Title>
          <HistoryList
            historyList={spendList}
            typeSpend="receipts"
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
          <Typography.Title level={4} style={{ color: "#000" }}>
            Tổng thu nhập:
            {/* {Object.values(spendList).reduce((r, { money }) => r + money, 0).toLocaleString()} */}
            <sub>đ</sub>
          </Typography.Title>
        </Col>
      </Row>
    </>
  );
}

export default SpendingManagement;
