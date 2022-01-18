import React from 'react';
import { MobXProviderContext } from 'mobx-react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useStores = () => {
  return React.useContext(MobXProviderContext);
};

export default useStores;
