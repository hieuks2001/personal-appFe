import { List } from "antd";
import PropTypes from "prop-types";
import History from "../History";

function HistoryList(props: any) {
  const historyList = props.historyList;
  const handleEdit = props.handleEdit;
  const handleDelete = props.handleDelete;

  const typeSpend = props.typeSpend;
  function Type(his: any) {
    if (his.type === typeSpend) {
      return <History history={his} handleEdit={handleEdit} handleDelete={handleDelete}/>;
    }
  }
  return (
    <div>
      <List
        grid={{ gutter: 14, column: 3 }}
        itemLayout="horizontal"
        dataSource={historyList}
        renderItem={(his: any) => Type(his)}
      />
    </div>
  );
}

HistoryList.propTypes = {
  historyList: PropTypes.array,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  typeSpend: PropTypes.string.isRequired,
};

export default HistoryList;
