const assert = require('assert')

Feature('Search Features')

Before(({I}) => I.amOnPage('/'))

Scenario('searching restaurant', async ({I}) => {
  I.seeElement('.catalogue-title a')

  const titles = []

  // Try to getting 3 first restaurant names
  for(let i = 1; i <= 3; i++) {
    const element = locate('.catalogue-title a').at(i)
    const title = await I.grabTextFrom(element)
    titles.push(title)
  }

  // FULL NAME SEARCHING TEST
  const searchBox = 'input.search-input'
  for(let i = 1; i <= titles.length; i++) {
    I.seeElement(searchBox)
    I.fillField(searchBox, titles[i-1])
    I.pressKey('Enter')
    I.wait(1)

    I.seeElement('.catalogue-title a')

    const searchedTitle = await I.grabTextFrom('.catalogue-title a')
    assert.strictEqual(searchedTitle, titles[i-1])

    I.fillField(searchBox, '')
  }

  // PARTIAL NAME SEARCHING TEST
  for(let i = 1; i <= titles.length; i++) {
    I.seeElement(searchBox)

    const partialSearch = titles[i-1].split(' ')[0]
    I.fillField(searchBox, partialSearch)
    I.pressKey('Enter')

    I.wait(1)

    I.seeElement('.catalogue-title a')
    const searchedTitle = await I.grabTextFrom('.catalogue-title a')
    
    assert.match(searchedTitle, new RegExp(partialSearch))
  }
})