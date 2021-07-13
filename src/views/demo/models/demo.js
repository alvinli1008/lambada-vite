import { observable, set } from 'mobx';

const defaultValue = {
  sum: 520
};

const model = observable({
  ...defaultValue,
  reset() {
    set(model, defaultValue);
  }
});

export default model;
