exports.FilterPage = class FilterPage {
    constructor(filterPage) {
        this.page = filterPage
        this.selectFilter = filterPage.getByText('Name (A to Z)Name (A to Z)')
        this.chooseTheFilter = filterPage.locator('[data-test="product-sort-container"]')
        this.sort = filterPage.waitForSelector('.inventory_item')
        this.checkTheItems = filterPage.evaluate(() => {
            const items = document.querySelectorAll('.inventory_item_name ');
            return Array.from(items).map(item => item.textContent.trim());
        });
        // this.chooseTheFilter = filterPage.locator('#product_sort_container')

    }
    async filter(selectTheOption) {
        await this.selectFilter.click()
        console.log('Click the sort button')
        await this.chooseTheFilter.selectOption(selectTheOption)
        console.log('Select the option');
    }
    async sortedAtoZ() {
        // Wait for the items to load and get their names
        await this.sort
        console.log('Check the items count')
        const itemNames = await this.checkTheItems

        // Verify that the items are sorted by name (A-Z)
        for (let i = 0; i < itemNames.length; i++) {
            console.log('Items are sorted by name (A-Z) '+itemNames[i])
            if (itemNames[i] > itemNames[i + 1]) {
                console.error('Items are not sorted by name (A-Z)')
                await this.browser.close();
                return;
            }
        }

    }
    async sortedZtoA() {
        // Wait for the items to load and get their names
        await this.sort
        const itemNames = await this.checkTheItems

        // Verify that the items are sorted by name (Z-A)
        for (let i = itemNames.length - 1; i >= 0; i--) {
            console.log('Items are sorted by name (Z-A) '+itemNames[i])
            if (itemNames[i] < itemNames[i - 1]) {
                console.error('Items are not sorted by name (Z-A)')
                await this.browser.close();
                return;
            }
        }

    }
}