export default function plop(/** @type {import("plop").NodePlopAPI} */ plop) {
  plop.setGenerator('ui', {
    description: 'Create a new UI component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Component type',
        choices: ['atom', 'molecule', 'organism', 'view'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Component path',
        // 👇 change default to src/app
        default: 'src/shared/components/ui',
      },
    ],

    actions: [
      {
        type: 'add',
        path: '{{path}}/{{type}}s/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './plop-templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: '{{path}}/{{type}}s/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: './plop-templates/Story.tsx.hbs',
      },
      {
        type: 'append',
        path: '{{path}}/{{type}}s/index.ts',
        template:
          'export { default as {{pascalCase name}} } from "./{{pascalCase name}}/{{pascalCase name}}";',
      },
      (answers) => {
        const componentPath = `${answers.path}/${answers.type}s/${plop.getHelper('pascalCase')(answers.name)}`;

        /* eslint-disable no-console */
        console.log('\n✅ Component created successfully!');
        console.log('\n📂 Navigate to your component:');
        console.log(`\n   cd ${componentPath}\n`);

        return 'Done!';
      },
    ],
  });
}
