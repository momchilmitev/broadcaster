import React from "react";
import { connect } from "react-redux";
import { pick } from "lodash";

import StreamForm from "./StreamForm";
import { fetchStream, editStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
