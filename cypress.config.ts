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
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    // 优化内存使用，减少每个测试的内存占用
    numTestsKeptInMemory: 0,
    // 优化超时设置
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000, 
    // 优化测试隔离
    testIsolation: true,
    // 优化页面加载
    pageLoadTimeout: 30000,
    // 优化重试策略
    retries: {
      runMode: 2,
      openMode: 0,
    },
    // 优化视频和截图
    video: false,
    screenshotOnRunFailure: true,
    // 优化浏览器配置
    chromeWebSecurity: false,
    // 优化文件监听
    watchForFileChanges: false,
  },
});
