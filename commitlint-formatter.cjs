// commitlint-formatter.cjs
const chalk = require('chalk');

module.exports = (report) => {
  const { results, valid } = report;
  
  if (valid) {
    return chalk.green('✓ Commit message is valid!\n');
  }

  let output = '\n';
  output += chalk.bold.red('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  output += chalk.bold.red('  COMMIT MESSAGE VALIDATION FAILED\n');
  output += chalk.bold.red('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n');

  results.forEach((result) => {
    const { input, errors, warnings } = result;

    output += chalk.yellow('📝 Your commit message:\n');
    output += chalk.dim(`   "${input}"\n\n`);

    if (errors.length > 0) {
      output += chalk.bold.red(`❌ ERRORS (${errors.length}):\n`);
      errors.forEach((error, index) => {
        output += chalk.red(`   ${index + 1}. ${error.message}`);
        
        // Add helpful hints based on the rule
        if (error.name === 'type-empty') {
          output += chalk.dim('\n      💡 Hint: Start with a type like ') + 
                   chalk.cyan('feat') + chalk.dim(', ') + 
                   chalk.cyan('fix') + chalk.dim(', or ') + 
                   chalk.cyan('docs');
        } else if (error.name === 'subject-empty') {
          output += chalk.dim('\n      💡 Hint: Add a description after the colon');
        } else if (error.name === 'type-enum') {
          output += chalk.dim('\n      💡 Valid types: ') + 
                   chalk.cyan('feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert');
        } else if (error.name === 'scope-case') {
          output += chalk.dim('\n      💡 Hint: Use lowercase for scope, e.g., ') + 
                   chalk.cyan('(auth)') + chalk.dim(' not ') + chalk.red('(Auth)');
        } else if (error.name === 'header-max-length') {
          output += chalk.dim('\n      💡 Hint: Keep the first line under 100 characters');
        } else if (error.name === 'subject-max-length') {
          output += chalk.dim('\n      💡 Hint: Keep the subject under 72 characters');
        } else if (error.name === 'subject-min-length') {
          output += chalk.dim('\n      💡 Hint: Subject should be at least 3 characters');
        } else if (error.name === 'subject-case') {
          output += chalk.dim('\n      💡 Hint: Use lowercase for subject, e.g., ') + 
                   chalk.cyan('add new feature') + chalk.dim(' not ') + chalk.red('Add New Feature');
        }
        
        output += chalk.dim(`\n      📋 Rule: ${error.name}\n\n`);
      });
    }

    if (warnings.length > 0) {
      output += chalk.bold.yellow(`⚠️  WARNINGS (${warnings.length}):\n`);
      warnings.forEach((warning, index) => {
        output += chalk.yellow(`   ${index + 1}. ${warning.message}`);
        
        if (warning.name === 'scope-empty') {
          output += chalk.dim('\n      💡 Hint: Consider adding a scope like ') + 
                   chalk.cyan('feat(auth)') + chalk.dim(' or ') + 
                   chalk.cyan('fix(dashboard)');
        } else if (warning.name === 'body-leading-blank') {
          output += chalk.dim('\n      💡 Hint: Add a blank line between header and body');
        } else if (warning.name === 'footer-leading-blank') {
          output += chalk.dim('\n      💡 Hint: Add a blank line before footer');
        }
        
        output += chalk.dim(`\n      📋 Rule: ${warning.name}\n\n`);
      });
    }
  });

  output += chalk.bold.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  output += chalk.bold.cyan('  CORRECT FORMAT:\n');
  output += chalk.bold.cyan('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n');
  output += chalk.white('  ') + chalk.cyan('type') + 
            chalk.white('(') + chalk.green('scope') + chalk.white('): ') + 
            chalk.yellow('subject') + chalk.dim(' (max 72 chars)') + '\n';
  output += chalk.dim('  │    │       └─ Short imperative description\n');
  output += chalk.dim('  │    └───────── Optional scope (lowercase)\n');
  output += chalk.dim('  └────────────── Required type\n\n');
  
  output += chalk.white('  Examples:\n');
  output += chalk.green('  ✓ feat(auth): add password reset functionality\n');
  output += chalk.green('  ✓ fix(api): resolve timeout on user endpoint\n');
  output += chalk.green('  ✓ docs: update installation guide\n');
  output += chalk.green('  ✓ refactor(ui): simplify button component logic\n\n');

  output += chalk.dim('  📖 Learn more: https://www.conventionalcommits.org/\n\n');

  return output;
};