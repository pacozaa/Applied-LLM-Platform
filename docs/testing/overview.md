# Testing Guide

This project includes comprehensive testing using Playwright for end-to-end tests and Jest for unit tests.

## 🎯 Test Types

### End-to-End Tests (Playwright)
- Test complete user workflows
- Validate UI interactions
- Ensure features work together

### Unit Tests (Jest)
- Test individual functions
- Validate business logic
- Fast feedback loop

## 🚀 Quick Start

### Prerequisites

```bash
# Install Playwright browsers (first time only)
npm run playwright:install
```

## 🧪 Running Tests

### End-to-End Tests

```bash
# Run all E2E tests
npm run test:e2e

# Run with UI mode (interactive)
npm run test:e2e:ui

# Run in headed mode (see browser)
npm run test:e2e:headed

# Debug tests
npm run test:e2e:debug

# View test report
npm run test:e2e:report
```

### Unit Tests

```bash
# Run all unit tests
npm run test:unit
# or
npm test

# Run in watch mode (auto-rerun on changes)
npm run test:watch

# Run with coverage report
npm run test:coverage
```

## 📁 Test Structure

```
tests/
├── e2e/              # Playwright E2E tests
│   ├── chat.spec.ts
│   ├── rag.spec.ts
│   └── ...
└── unit/             # Jest unit tests
    ├── utils.test.ts
    └── ...
```

## ✍️ Writing Tests

### E2E Test Example

```typescript
// tests/e2e/chat.spec.ts
import { test, expect } from '@playwright/test';

test('basic chat interaction', async ({ page }) => {
  await page.goto('/chat');
  
  // Type message
  await page.fill('textarea', 'Hello, AI!');
  await page.click('button[type="submit"]');
  
  // Wait for response
  await expect(page.locator('.response')).toBeVisible();
});
```

### Unit Test Example

```typescript
// tests/unit/utils.test.ts
import { describe, it, expect } from '@jest/globals';
import { formatMessage } from '@/lib/utils';

describe('formatMessage', () => {
  it('should format message correctly', () => {
    const result = formatMessage('hello');
    expect(result).toBe('HELLO');
  });
});
```

## 🔍 Test Configuration

### Playwright Configuration

See `playwright.config.ts` for:
- Browser settings
- Test timeout
- Base URL
- Parallel execution
- Screenshot/video capture

### Jest Configuration

See `jest.config.js` for:
- Test environment
- Coverage settings
- Module resolution
- Transform settings

## 📊 Coverage Reports

After running tests with coverage:

```bash
npm run test:coverage
```

Open the coverage report:
```bash
# Coverage report location
open coverage/lcov-report/index.html
```

## 🎯 Best Practices

### E2E Tests
- ✅ Test critical user workflows
- ✅ Use data-testid for stable selectors
- ✅ Wait for elements properly
- ✅ Keep tests independent
- ❌ Don't test implementation details

### Unit Tests
- ✅ Test one thing at a time
- ✅ Use descriptive test names
- ✅ Mock external dependencies
- ✅ Test edge cases
- ❌ Don't test library code

## 🆘 Troubleshooting

### Playwright Browser Not Installed

```bash
npm run playwright:install
```

### Test Timeout

Increase timeout in `playwright.config.ts`:
```typescript
timeout: 60 * 1000, // 60 seconds
```

### Port Already in Use

Make sure dev server isn't running on test port:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Tests Failing Intermittently

- Add proper waits: `await page.waitForSelector()`
- Increase timeout for slow operations
- Check for race conditions

### Jest Module Not Found

```bash
# Clear Jest cache
npx jest --clearCache

# Reinstall dependencies
rm -rf node_modules
npm install
```

## 📈 CI/CD Integration

Tests run automatically on:
- Pull requests
- Push to main branch
- Before deployment

See `.github/workflows/` for CI configuration.

## 🎓 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Jest Documentation](https://jestjs.io/)
- [Testing Best Practices](https://testing-library.com/docs/guiding-principles/)
- [E2E Testing Guide](https://martinfowler.com/articles/practical-test-pyramid.html)

## 📊 Current Test Status

- **Test Coverage**: ~5% (targeting 60-70%)
- **E2E Tests**: Configured and running
- **Unit Tests**: Framework setup complete
- **CI/CD**: Integrated with GitHub Actions

See the main [README.md](../../README.md) for project status.
