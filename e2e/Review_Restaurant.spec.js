const assert = require('assert')

Feature('Review Restaurant')

Before(({I}) => I.amOnPage('/'))

Scenario('Give A Restaurant Review', async ({I}) => {
  I.seeElement('.catalogue-title a')
  I.click(locate('.catalogue-title a').first())

  I.wait(1)
  I.scrollPageToBottom()

  I.seeElement('input[name="name"]')
  const reviewerName = "[E2E]"
  I.fillField("name", reviewerName)
  
  I.seeElement('textarea[name="review"]')
  const reviewContent = "[E2E] Test Review"
  I.fillField("review", reviewContent)
  
  I.seeElement('input[type="submit"]')
  I.click(locate('input[type="submit"]'))
  
  I.seeElement('.swal2-popup')
  I.see('Success!', 'h2.swal2-title')
  I.see('Your Reviews has been added', 'div#swal2-content')
  I.seeElement('button.swal2-confirm')
  I.click(locate('button.swal2-confirm'))
  
  const lastReviewerName = await I.grabTextFrom(locate('.review__name').last())
  const lastReviewerContent = await I.grabTextFrom(locate('.review__description').last())

  assert.strictEqual(reviewerName, lastReviewerName)
  assert.strictEqual(reviewContent, lastReviewerContent)
})