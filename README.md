## vite antd tailwind react

### Install 
```

  npm i

```


### 模块化
```

views
  demo
    assets
    components
    models
    types
    index.tsx


  // 各模块 models routes 融合
  const mergeFunc = (app: IModuleProps) => {
    const context = import.meta.globEager('./views/**/index.tsx');
    return Object.keys(context)
      .sort((a) => (a == './views/frame/index.tsx' ? -1 : 1))
      .map((key) => context[key].default(app));
  };
  mergeFunc(app);

```
   

### vite 初试 问题： 

1：tsx 默认支持 装饰器写法；
但 jsx 在加入(如下) babel.config.js 还是不生效；

```

  'use strict';

  module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }]
    ]
  };

```

2：mobx-react 函数式组件 inject 注入 model 时 热更新失效，
但 class 的模式不会；

```

  import { inject, observer } from 'mobx-react';

  const Demo = ({ demo }) => {
    return <div></div>
  }

  export default inject('demo')(observer(Demo));

```