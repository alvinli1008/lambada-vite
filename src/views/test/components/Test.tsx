import React from 'react';
import { inject, observer } from 'mobx-react';
@inject('test')
@observer
class Test extends React.Component {
  render() {
    return <div>test</div>;
  }
}

export default Test;
