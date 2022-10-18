import { Button, DatePicker, Form, Input, InputNumber, Select, Typography } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import PropTypes from 'prop-types';

function FormSpending(props: any) {
    const onSubmit = props.onSubmitForm
    return (
        <div>
            <Typography.Title level={4} type='danger'>Nhập thu/chi hôm nay</Typography.Title>

            <Form layout="horizontal"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ type: 'payments' }}
                onFinish={onSubmit}
                autoComplete="off"
            >
                <FormItem label='Công việc' name="action" >
                    <Input />
                </FormItem>
                <FormItem label="Type" name="type">
                    <Select style={{ width: 140 }}>
                        <Select.Option value="payments">Chi tiêu</Select.Option>
                        <Select.Option value="receipts">Thu nhập</Select.Option>
                    </Select>
                </FormItem>
                <FormItem label="Số tiền" name="money" >
                    <InputNumber
                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value!.replace(/\$\s?|(,*)/g, '')}
                        style={{ width: 140 }} />
                </FormItem>
                <FormItem label="Thời gian" name="datetime" wrapperCol={{ span: 8 }} >
                    <DatePicker showTime />
                </FormItem>
                <FormItem wrapperCol={{ span: 14, offset: 4 }}>
                    <Button type="primary" size="large" htmlType='submit'>Submit</Button>
                </FormItem>

            </Form>
        </div>
    )
}

FormSpending.propTypes = {
    onSubmitForm: PropTypes.func
}

export default FormSpending
