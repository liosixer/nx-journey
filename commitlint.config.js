const commitEnum = require('./.cz-config');

module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [2, 'always', commitEnum.types.map((i) => i.value)],
    'scope-enum': [2, 'always', commitEnum.scopes.map((i) => i.name)],
    'scope-empty': [2, 'never'],
    // subject 大小写不做校验
    'subject-case': [0],
  },
};
