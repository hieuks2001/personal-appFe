import { List } from 'antd';
import PropTypes from 'prop-types';
import History from '../History';

function HistoryList(props: any) {

    const historyList = props.historyList;
    const handleEdit = props.handleEdit

    return (
        <div>
            <List
                grid={{ gutter: 14, column: 3 }}
                itemLayout="horizontal"
                dataSource={historyList}
                renderItem={(his: any) => (
                    <History history={his} handleEdit={handleEdit}/>
                )}
            />


        </div>
    )
}

HistoryList.propTypes = {
    historyList: PropTypes.array,
    handleEdit: PropTypes.func

}

export default HistoryList
