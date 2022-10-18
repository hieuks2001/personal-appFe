import { Divider, List, Space, Typography } from "antd";
import HistoryList from "./components/HistoryList";
import React from 'react'
import PropTypes from 'prop-types'

function DisplayDataHistory(props: any) {
    const title = props.title;
    const historyList = props.historyList;
    const handleEdit = props.handleEdit
    return (
        <div>
            <Typography.Title level={3} type='danger'>{title}</Typography.Title>
            <HistoryList historyList={historyList} handleEdit={handleEdit}/>
        </div>
    )
}

DisplayDataHistory.propTypes = {
    title:PropTypes.string,
    historyList : PropTypes.array,
    handleEdit: PropTypes.func
}

export default DisplayDataHistory
