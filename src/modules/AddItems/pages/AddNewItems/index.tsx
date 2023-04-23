import { Col, Row } from "antd";
import moment from "moment";
import useCreateItem from "../../hooks/useCreateItem";

import { useState } from "react";
import FormAddItems from "../../components/Handle";
import useGetPublisher from './../../hooks/useGetPublisher';

function AddNewItems() {
  // const { data: spendList } = useGetSpend();
  const spendList = useState([]);
  const { mutate: postSpend } = useCreateItem();



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
          <FormAddItems onSubmitForm={onSubmitForm} />
        </Col>

        {/* <Col span={12}>
          <Typography.Title level={2} type="warning">
            {date}
          </Typography.Title>
          <Typography.Title level={3} type="danger">
            Sách đã nhập hôm nay
          </Typography.Title>
          <HistoryList
            historyList={spendList}
            typeSpend="payments"           
          />

          <hr />
        </Col> */}
      </Row>
    </div>
  );
}

export default AddNewItems;
