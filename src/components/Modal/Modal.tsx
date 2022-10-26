import { Button, DatePicker, Form, Input, InputNumber, Modal, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import PropTypes from 'prop-types';

function ModalEdit(props: any) {
    const modalOpen = props.modalOpen
    const modalCancel = props.modalCancel
    const data = props.editData
    const modalOk = props.modalOk

    return (
        <Modal title="Edit" open={modalOpen} footer={<><Button onClick={modalCancel} size="large" htmlType='submit'>Cancel</Button></>}>
            <Form layout="horizontal"
                labelCol={{ span: 4 }}
                // wrapperCol={{ span: 8 }}
                onFinish={modalOk}
                initialValues={{
                    _id : data._id,
                    action: data.action,
                    type: data.type,
                    money: data.money,           
                }}
            >
                 <FormItem name="_id" hidden>
                </FormItem>
                <FormItem label='Công việc' name="action" >
                    <Input />
                </FormItem>
                <FormItem label="Type" name="type">
                    <Select value={data.type}>
                        <Select.Option value="payments">Chi tiêu</Select.Option>
                        <Select.Option value="receipts">Thu nhập</Select.Option>
                    </Select>
                </FormItem>
                <FormItem label="Số tiền" name="money" >
                    <InputNumber
                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value!.replace(/\$\s?|(,*)/g, '')}
                        style={{ width: 140 }} value={data.money} />
                </FormItem>
                <FormItem label="Thời gian" name="datetime" wrapperCol={{ span: 14 }}  >
                    <DatePicker showTime placeholder={data.datetime}/>
                </FormItem>
                <FormItem wrapperCol={{ span: 14, offset: 4 }}>
                    <Button type="primary" size="large" htmlType='submit'>Submit</Button>
                </FormItem>

            </Form>
        </Modal>
    )
}

ModalEdit.propTypes = {
    modalOpen: PropTypes.bool,
    editData: PropTypes.object,
    modalCancel: PropTypes.func,
    modalOk: PropTypes.func,
}


export default ModalEdit
