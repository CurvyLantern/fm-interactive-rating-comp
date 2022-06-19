'use strict'
const ratingStore = {
    value: undefined,
}
const getElById = (id) => document.getElementById(id)

const ratingCard = getElById('ratingCard')
const thankYouCard = getElById('thankYouCard')
const insertRating = getElById('insertRating')
const ratingContainer = getElById('ratingContainer')
const submitBtn = getElById('sumbitBtn')

ratingContainer.addEventListener('click', onRateFn)

function onRateFn(e) {
    if (e.target.tagName.toLowerCase() !== 'button') {
        return
    }
    ratingStore.value = e.target.value
}

submitBtn.addEventListener('click', onSubmitFn)
function onSubmitFn(e) {
    insertRating.textContent = ratingStore.value

    ratingCard.classList.add('rating__card--is-not-active')
    thankYouCard.classList.remove(
        'rating__card--is-not-active',
    )
}
