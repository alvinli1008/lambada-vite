import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

const Test = ({ test }) => {
  return (
    <div className="tw-mx-2 tw-text-[22px] ">
      Test
      <Button type="primary">btn</Button>
    </div>
  );
};

Test.propTypes = {
  test: PropTypes.object
};

export default inject('test')(observer(Test));
