// commitlint.config.cjs
module.exports = {
  extends: ['@commitlint/config-conventional'],
  
  // Use custom formatter
  formatter: './commitlint-formatter.cjs',
  
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // ✨ A new feature
        'fix',      // 🐛 A bug fix
        'docs',     // 📚 Documentation changes
        'style',    // 💎 Code style/formatting
        'refactor', // 📦 Code refactoring
        'perf',     // 🚀 Performance improvements
        'test',     // 🚨 Adding/updating tests
        'build',    // 🛠 Build system changes
        'ci',       // ⚙️ CI configuration changes
        'chore',    // ♻️ Other changes
        'revert',   // 🗑 Revert previous commit
      ],
    ],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-max-length': [2, 'always', 72],
    'subject-min-length': [2, 'always', 3],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'scope-empty': [1, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'header-max-length': [2, 'always', 100],
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
  },

  helpUrl: 'https://www.conventionalcommits.org/',

  prompt: {
    messages: {
      skip: ':skip',
      max: 'upper %d chars',
      min: '%d chars at least',
      emptyWarning: 'can not be empty',
      upperLimitWarning: 'over limit',
      lowerLimitWarning: 'below limit',
    },
  },
};