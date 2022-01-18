// 模块 index.js routes/models

// import config from '../modules/frame/models/config';

const getMergeApp = (locale) => {
  const app = { routes: [], models: {}, messages: {}, locale };

  const context = import.meta.globEager('../views/**/index.js');
  Object.keys(context)
    .sort((a) => (a == '../views/frame/index.js' ? -1 : 1))
    .map((key) => {
      return context[key].default(app);
    });
  return app;
};

export default {
  getMergeApp
};
