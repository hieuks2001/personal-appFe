import { Col, Row } from "antd";
import moment from "moment";

import { useState } from "react";
import useCreateBorrowBook from '../../hooks/user/useCreateBorrowBook';
import FormAddBorrower from './../../components/handleAddBorrower/index';


function AddNewItems() {
  // const { data: spendList } = useGetSpend();
  const { mutate: createBorrower } = useCreateBorrowBook();

  const onSubmitForm = (values) => {
    
    createBorrower(values);
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
          <FormAddBorrower handleSubmit={onSubmitForm} />
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
