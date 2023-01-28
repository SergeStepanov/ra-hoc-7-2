import React from 'react';
import New from './New';
import Popular from './Popular';

export default function withHighlightingBlocks(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.views = props.views;
    }

    render() {
      if (this.views >= 1000) {
        return (
          <Popular>
            <Component {...this.props} />
          </Popular>
        );
      }

      if (this.views < 100) {
        return (
          <New>
            <Component {...this.props} />
          </New>
        );
      }

      return <Component {...this.props} />;
    }
  };
}
