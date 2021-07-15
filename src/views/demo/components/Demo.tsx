import React from 'react';
import { inject, observer } from 'mobx-react';
import { set } from 'mobx';
import { Button } from 'antd';
// import { useStores } from '~/hooks';

import { IDemoProps } from '../types/demo';
interface IChild {
  click: () => void;
}

// const Child = memo(({ click }: IChild) => {
//   console.log('child');
//   return (
//     <div>
//       <button onClick={click}>click</button>
//     </div>
//   );
// });

// const Demo = () => {
//   const { demo } = useStores();

//   const handleClick = React.useCallback(() => {
//     console.log('handleClick', demo);
//   }, [demo]);

//   console.log('demo');
//   return (
//     <div className="tw-p-10">
//       <div className="tw-text-blue-600 ">sum: {demo.sum}</div>
//       <Button
//         type="primary"
//         onClick={() => {
//           set(demo, { sum: demo.sum + 1 });
//         }}
//       >
//         sum
//       </Button>

//       <Child click={handleClick} />
//     </div>
//   );
// };

// export default observer(Demo);

const Child = React.memo(({ click }: IChild) => {
  console.log('child');
  return (
    <div>
      <button onClick={click}>click</button>
    </div>
  );
});

@inject('demo')
@observer
class Demo extends React.Component<IDemoProps, unknown> {
  handleClick = () => {
    // console.log('handleClick');
  };

  render() {
    const { demo } = this.props;
    // console.log('demo');
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

        <Child click={this.handleClick} />
      </div>
    );
  }
}

export default observer(Demo);
