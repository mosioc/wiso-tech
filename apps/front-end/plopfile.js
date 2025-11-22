export default function (plop) {
  plop.setGenerator('feature', {
    description: 'Create a new project feature (CRUD, Hook, Service)',
    prompts: [
      {
        type: 'checkbox',
        name: 'features',
        message: 'Select files to generate:',
        choices: [
          { name: 'CRUD Component', value: 'crud' },
          { name: 'Custom Hook', value: 'hook' },
          { name: 'Service', value: 'service' }
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the feature name?'
      },
      {
        type: 'confirm',
        name: 'typescript',
        message: 'Use TypeScript?',
        default: true
      }
    ],
    actions: function(data) {
      const ext = data.typescript ? 'ts' : 'js';
      const jsxExt = data.typescript ? 'tsx' : 'js';
      const actions = [];

      // CRUD Component
      if (data.features.includes('crud')) {
        actions.push({
          type: 'add',
          path: `src/components/{{pascalCase name}}.${jsxExt}`,
          templateFile: 'plop-templates/crud-component.hbs'
        });
      }

      // Custom Hook
      if (data.features.includes('hook')) {
        actions.push({
          type: 'add',
          path: `src/hooks/use{{pascalCase name}}.${ext}`,
          templateFile: 'plop-templates/custom-hook.hbs'
        });
      }

      // Service
      if (data.features.includes('service')) {
        actions.push({
          type: 'add',
          path: `src/services/{{camelCase name}}Service.${ext}`,
          templateFile: 'plop-templates/service.hbs'
        });
      }

      // You can add more generators here (context, tests, etc.)
      return actions;
    }
  });
};