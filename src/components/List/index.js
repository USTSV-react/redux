import React from "react";
import { connect } from "react-redux";
import { getList } from "../../redux/action-creators";

class List extends React.Component {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        <ul>
          {list.data && list.data.map((user, index) => {
            return (
              <li key={index}><a href={`/details/${user.login}`}>{user.login}</a></li>
            );
          })}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    list: state.list
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getList: () => { dispatch(getList()); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

