export const searchPageTitle = 'Search - Redmine'
export const valueForSearch = "user"

export class SearchPage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.searchField = page.getByLabel('Search:');
        this.searchTitleOnlyCheck = page.getByLabel('Search titles only');
        this.searchBtn = page.getByRole('button', { name: 'Search' });
        this.searchResult = page.locator('//*[@id="content"]/h3');
    }
}