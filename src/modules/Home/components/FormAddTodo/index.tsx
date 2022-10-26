import { Button, Form, Input, Select } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import PropTypes from 'prop-types'

function AddTodo(props: any) {
    const handleSubmit = props.handleSubmit
    return (
        <Form
            labelCol={{ span: 1 }}
            wrapperCol={{ span: 4 }}
            layout="horizontal"
            onFinish={handleSubmit}
            autoComplete="off"
            initialValues={{ status: 'new' }}
        >
            <FormItem label="Todo" name="action" >
                <Input placeholder="Type something..." />
            </FormItem>
            <FormItem label="Status" name="status" >
                <Select style={{ width: 130 }}>
                    <Select.Option value="new">New</Select.Option>
                    <Select.Option value="completed">Completed</Select.Option>
                </Select>
            </FormItem>
            <FormItem>
                <Button type="primary" size="middle" htmlType='submit'>Submit</Button>
            </FormItem>
        </Form>
    )
}

AddTodo.propTypes = {
    handleSubmit: PropTypes.func
}

export default AddTodo
