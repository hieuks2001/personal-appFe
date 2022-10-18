import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Divider, List, Space, Typography } from 'antd'
import { EditOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import ModalEdit from '../../../../../../components/Modal/Modal';
import { updateSpending } from '../../../../services/routes';
import { deleteSpending } from './../../../../services/routes';
import moment from 'moment';

function History(props: any) {
    const his = props.history
    const onEventChange = props.handleEdit
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = (values: any) => {
        updateSpending(his._id, values);
        onEventChange(true);
        setIsModalOpen(false);
    };
    const handleDelete = () => {
        deleteSpending(his._id);
        onEventChange(true)
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <List.Item>
                <Card title={moment(his.datetime).format('DD/MM/YYYY hh:mm A')}>
                    <Space align="center" size={14} split={<Divider type="vertical" />}>
                        <Typography.Title level={5}>
                            <Typography.Text type="danger" >{his.action}</Typography.Text> <br />
                            <Typography.Text>{(his.money).toLocaleString()} <sub>đ</sub></Typography.Text>
                        </Typography.Title>
                        <EditOutlined onClick={() => setIsModalOpen(true)} />
                        <DeleteOutlined onClick={() => handleDelete()} />
                    </Space>
                </Card>
            </List.Item>
            <ModalEdit modalOpen={isModalOpen} modalCancel={handleCancel} modalOk={handleOk} editData={his} />

        </div >
    )
}

History.propTypes = {
    history: PropTypes.object,
    handleEdit: PropTypes.func

}

export default History
