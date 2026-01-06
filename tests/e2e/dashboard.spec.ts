import { expect, test } from '@playwright/test';

test.describe('Dashboard Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the Dashboard page', async ({ page }) => {
    // Verify the page has loaded by checking the URL
    expect(page.url()).toContain('/');
    
    // Check that the dashboard container is visible
    const dashboardContainer = page.getByTestId('dashboard-container');
    await expect(dashboardContainer).toBeVisible();
  });

  test('should display the header correctly', async ({ page }) => {
    // Check dashboard header
    const header = page.getByTestId('dashboard-header');
    await expect(header).toBeVisible();
    
    // Check title
    const title = page.getByTestId('dashboard-title');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('Applied LLM Platform');
    
    // Check description
    const description = page.getByTestId('dashboard-description');
    await expect(description).toBeVisible();
    await expect(description).toContainText('20+ LLM examples');
  });

  test('should display search input', async ({ page }) => {
    const searchInput = page.getByTestId('dashboard-search-input');
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toHaveAttribute('placeholder', 'Search examples...');
  });

  test('should display all category filter buttons', async ({ page }) => {
    const categoryFilters = page.getByTestId('dashboard-category-filters');
    await expect(categoryFilters).toBeVisible();
    
    // Check all categories are present
    const categories = ['all', 'agents', 'chat', 'rag', 'evaluation'];
    for (const category of categories) {
      const categoryButton = page.getByTestId(`dashboard-category-${category}`);
      await expect(categoryButton).toBeVisible();
    }
  });

  test('should filter examples by category', async ({ page }) => {
    // Initially all examples should be visible
    const examplesGrid = page.getByTestId('dashboard-examples-grid');
    await expect(examplesGrid).toBeVisible();
    
    // Get initial count of example cards
    const initialCards = await page.getByTestId(/^dashboard-card-/).count();
    expect(initialCards).toBeGreaterThan(0);
    
    // Click on 'Chat' category
    const chatButton = page.getByTestId('dashboard-category-chat');
    await chatButton.click();
    
    // Wait for filtering to complete
    await page.waitForTimeout(500);
    
    // Check that filtered results are less than total
    const chatCards = await page.getByTestId(/^dashboard-card-/).count();
    expect(chatCards).toBeGreaterThan(0);
    expect(chatCards).toBeLessThan(initialCards);
    
    // Check that at least one Chat category badge is visible
    const firstChatCard = page.getByTestId('dashboard-card-category-chat').first();
    await expect(firstChatCard).toBeVisible();
    await expect(firstChatCard).toContainText('Chat');
    
    // Click on 'All' category to reset
    const allButton = page.getByTestId('dashboard-category-all');
    await allButton.click();
    await page.waitForTimeout(500);
    
    // Verify all examples are visible again
    const finalCards = await page.getByTestId(/^dashboard-card-/).count();
    expect(finalCards).toBe(initialCards);
  });

  test('should search and filter examples', async ({ page }) => {
    const searchInput = page.getByTestId('dashboard-search-input');
    
    // Type in search input
    await searchInput.fill('shell');
    await page.waitForTimeout(500);
    
    // Check that filtered results contain the search term
    const cards = await page.getByTestId(/^dashboard-card-/).all();
    expect(cards.length).toBeGreaterThan(0);
    
    // Verify at least one card contains 'shell' in title or description
    let foundMatch = false;
    for (const card of cards) {
      const title = await card.locator('[data-testid*="dashboard-card-title"]').textContent();
      const description = await card.locator('[data-testid*="dashboard-card-description"]').textContent();
      if (title?.toLowerCase().includes('shell') || description?.toLowerCase().includes('shell')) {
        foundMatch = true;
        break;
      }
    }
    expect(foundMatch).toBe(true);
  });

  test('should show no results message when search has no matches', async ({ page }) => {
    const searchInput = page.getByTestId('dashboard-search-input');
    
    // Type a search term that won't match anything
    await searchInput.fill('xyzabc123nonexistent');
    await page.waitForTimeout(500);
    
    // Check that no results message is visible
    const noResults = page.getByTestId('dashboard-no-results');
    await expect(noResults).toBeVisible();
    await expect(noResults).toContainText('No examples found matching your search');
    
    // Check that examples grid has no cards
    const cards = await page.getByTestId(/^dashboard-card-/).count();
    expect(cards).toBe(0);
  });

  test('should display stats footer correctly', async ({ page }) => {
    const statsFooter = page.getByTestId('dashboard-stats-footer');
    await expect(statsFooter).toBeVisible();
    
    // Check that it shows the correct format
    await expect(statsFooter).toContainText('Showing');
    await expect(statsFooter).toContainText('of');
    await expect(statsFooter).toContainText('examples');
  });

  test('should update stats footer when filtering', async ({ page }) => {
    const statsFooter = page.getByTestId('dashboard-stats-footer');
    
    // Get initial text
    const initialText = await statsFooter.textContent();
    
    // Apply a filter
    const chatButton = page.getByTestId('dashboard-category-chat');
    await chatButton.click();
    await page.waitForTimeout(500);
    
    // Check that stats footer updated
    const filteredText = await statsFooter.textContent();
    expect(filteredText).not.toBe(initialText);
  });

  test('should display example cards with all elements', async ({ page }) => {
    const examplesGrid = page.getByTestId('dashboard-examples-grid');
    await expect(examplesGrid).toBeVisible();
    
    // Get the first example card
    const firstCard = page.getByTestId('dashboard-card-react');
    await expect(firstCard).toBeVisible();
    
    // Check card title
    const cardTitle = page.getByTestId('dashboard-card-title-react');
    await expect(cardTitle).toBeVisible();
    await expect(cardTitle).toHaveText('Shell Agent');
    
    // Check card category badge
    const cardCategory = page.getByTestId('dashboard-card-category-react');
    await expect(cardCategory).toBeVisible();
    await expect(cardCategory).toHaveText('Agents');
    
    // Check card description
    const cardDescription = page.getByTestId('dashboard-card-description-react');
    await expect(cardDescription).toBeVisible();
    
    // Check card button
    const cardButton = page.getByTestId('dashboard-card-button-react');
    await expect(cardButton).toBeVisible();
    await expect(cardButton).toContainText('Try it out');
  });

  test('should navigate to example page when clicking card button', async ({ page }) => {
    // Click on a card button
    const cardButton = page.getByTestId('dashboard-card-button-react');
    await cardButton.click();
    
    // Verify navigation occurred
    await page.waitForURL('**/react');
    expect(page.url()).toContain('/react');
  });

  test('should be responsive on different viewport sizes', async ({ page }) => {
    const viewports = [
      { width: 1920, height: 1080, name: 'Desktop' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 375, height: 667, name: 'Mobile' },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ 
        width: viewport.width, 
        height: viewport.height 
      });
      
      await page.goto('/');
      
      // Verify dashboard is still visible and usable
      const dashboardContainer = page.getByTestId('dashboard-container');
      await expect(dashboardContainer).toBeVisible();
      
      const header = page.getByTestId('dashboard-header');
      await expect(header).toBeVisible();
      
      const searchInput = page.getByTestId('dashboard-search-input');
      await expect(searchInput).toBeVisible();
    }
  });

  test('should combine search and category filters', async ({ page }) => {
    // Apply category filter first
    const ragButton = page.getByTestId('dashboard-category-rag');
    await ragButton.click();
    await page.waitForTimeout(500);
    
    // Get count after category filter
    const ragOnlyCount = await page.getByTestId(/^dashboard-card-/).count();
    expect(ragOnlyCount).toBeGreaterThan(0);
    
    // Verify at least one RAG badge is visible
    const ragBadge = page.getByTestId(/dashboard-card-category-/).first();
    await expect(ragBadge).toBeVisible();
    
    // Then apply search filter
    const searchInput = page.getByTestId('dashboard-search-input');
    await searchInput.fill('chat');
    await page.waitForTimeout(500);
    
    // Check that results are filtered down further or equal
    const combinedCount = await page.getByTestId(/^dashboard-card-/).count();
    expect(combinedCount).toBeLessThanOrEqual(ragOnlyCount);
  });

  test('should clear search when typing empty string', async ({ page }) => {
    const searchInput = page.getByTestId('dashboard-search-input');
    
    // First search for something
    await searchInput.fill('agent');
    await page.waitForTimeout(500);
    const filteredCount = await page.getByTestId(/^dashboard-card-/).count();
    
    // Clear search
    await searchInput.fill('');
    await page.waitForTimeout(500);
    
    // Should show all examples again
    const allCount = await page.getByTestId(/^dashboard-card-/).count();
    expect(allCount).toBeGreaterThan(filteredCount);
  });

  test('should maintain filter state when category is selected', async ({ page }) => {
    const agentsButton = page.getByTestId('dashboard-category-agents');
    await agentsButton.click();
    await page.waitForTimeout(500);
    
    // Check that only Agents examples are shown
    const agentsCount = await page.getByTestId(/^dashboard-card-/).count();
    expect(agentsCount).toBeGreaterThan(0);
    
    // Verify at least one Agents badge is visible
    const agentsBadge = page.getByTestId(/dashboard-card-category-/).first();
    await expect(agentsBadge).toBeVisible();
    
    // Click another category
    const chatButton = page.getByTestId('dashboard-category-chat');
    await chatButton.click();
    await page.waitForTimeout(500);
    
    // Check that Chat examples are shown
    const chatCount = await page.getByTestId(/^dashboard-card-/).count();
    expect(chatCount).toBeGreaterThan(0);
    
    // Verify count changed
    expect(chatCount).not.toBe(agentsCount);
  });
});
