import { observable, set } from 'mobx';

const defaultValue = {
  test: 'test'
};

const model = observable({
  ...defaultValue,
  reset() {
    set(model, defaultValue);
  }
});

export default model;
