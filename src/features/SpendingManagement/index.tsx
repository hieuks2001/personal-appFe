import { Col, Row, Typography } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import ModalEdit from './../../components/Modal/Modal';
import DisplayDataHistory from './components/DisplayDataHistory/index';
import FormSpending from './components/HandleFormDataSpending';
import { getOneSpeding, getTypeSpeding, postSpending } from './services/routes';

type Spend = {
  action: string,
  type: string,
  money: number,
  datetime: string,
}

function SpendingManagement() {
  const [payments, getPaymentsList] = useState<Spend[]>([]);
  const [receipts, getReceiptsList] = useState<Spend[]>([]);
  const [onSubmit, getOnSubmit] = useState(false);


  const onSubmitForm = (values: any) => {
    // values.datetime = moment(values.datetime).format('DD/MM/YYYY hh:mm A');
    // console.log(values);
    postSpending(values).then(res => console.log(res.data)
    );
    getOnSubmit(true);
  }

  useEffect(() => {
    getTypeSpeding('payments').then(res => {
      getPaymentsList(res.data)
    })
    getTypeSpeding('receipts').then(res => {
      getReceiptsList(res.data)
    })
    getOnSubmit(false)
  }, [onSubmit])
  const date = moment(new Date()).format('DD/MM/YYYY');
  return (
    <>
      <br />
      <Row gutter={24}>

        <Col span={8}>
          <FormSpending onSubmitForm={onSubmitForm} />
        </Col>

        <Col span={14}>
          <Typography.Title level={2} type='warning'>{date}</Typography.Title>

          <DisplayDataHistory title={'Chi tiêu hôm nay'} historyList={payments} handleEdit={getOnSubmit} />
          <Typography.Title level={4} style={{ color: "000" }}>Tổng chi tiêu: {Object.values(payments).reduce((r, { money }) => r + money, 0).toLocaleString()} <sub>đ</sub></Typography.Title>

          <hr />
          <DisplayDataHistory title={'Thu nhập hôm nay'} historyList={receipts} />
          <Typography.Title level={4} style={{ color: "#000" }}>Tổng thu nhập: {Object.values(receipts).reduce((r, { money }) => r + money, 0).toLocaleString()} <sub>đ</sub></Typography.Title>
        </Col>
      </Row>
    </>
  )
}

export default SpendingManagement