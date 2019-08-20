import React from "react";
import { connect } from "react-redux";
import { getDetails } from "../../redux/action-creators";

class Details extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getDetails(this.props.match.params.userId);
  }

  render() {
    const { details } = this.props;
    return (
      <div>
        {details && <strong>{details.data.login}</strong>}
        <a href="/">back</a>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    details: state.details
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getDetails: (id) => { dispatch(getDetails(id)); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);

