import React from 'react';
import { observer } from 'mobx-react';
import { set } from 'mobx';
import { Button } from 'antd';
import { useStores } from '~/hooks';

const Demo = () => {
  const { demo } = useStores();

  return (
    <div className="tw-p-10">
      <div className="tw-text-blue-600 ">sum: {demo.sum}</div>
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

export default observer(Demo);
