import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task.js';
import { execSync } from 'child_process';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: ['cypress/**/*.*', '**/__tests__/**/*.*', '**/*.test.*'],
      reportDir: 'coverage/cypress',
      all: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      reporter: ['text', 'html', 'text-summary', 'json', 'lcov'],
      tempDir: 'coverage/.nyc_output',
    },
  },
  watchForFileChanges: false,
  component: {
    // src/components/editor/__tests__/blocks/Paragraph.cy.tsx
    specPattern: '**/*.cy.tsx',
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);

      // 在测试完成后生成报告
      on('after:run', async () => {
        try {
          // 确保目录存在
          execSync('mkdir -p coverage/cypress');
          // 运行 nyc 报告
          execSync('nyc report --reporter=lcov --reporter=text --reporter=html --report-dir=coverage/cypress', {
            stdio: 'inherit'
          });
        } catch (error) {
          console.error('Error generating coverage report:', error);
        }
      });

      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
        table(message) {
          console.table(message);
          return null;
        }
      });
      return config;
    },
    supportFile: 'cypress/support/component.ts',
  },
  e2e: {
    specPattern: '**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    baseUrl: 'http://localhost:3000/',
  },
});
