module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0, 'always', 200],
    'subject-case': [0],
    'scope-case': [0]
  }
};
