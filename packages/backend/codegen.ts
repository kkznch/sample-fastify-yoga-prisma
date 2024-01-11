import type { CodegenConfig } from '@graphql-codegen/cli';
import { printSchema } from 'graphql';
import { schema } from './src/schema';

const config: CodegenConfig = {
  schema: printSchema(schema),
  generates: {
    './src/schema.gen.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
