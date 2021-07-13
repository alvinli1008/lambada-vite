import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { set } from 'mobx';
import { Button } from 'antd';

const Demo = ({ demo }) => {
  return (
    <div className="tw-p-10">
      <div className="tw-text-blue-600 "> sum: {demo.sum}</div>
      <Button
        type="primary"
        onClick={() => {
          set(demo, { sum: demo.sum + 1 });
        }}
      >
        sum
      </Button>
    </div>
  );
};
Demo.propTypes = {
  demo: PropTypes.object
};

export default inject('demo')(observer(Demo));
