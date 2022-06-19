'use strict'
const ratingStore = {
    value: undefined,
}
const getElById = (id) => document.getElementById(id)

const ratingCard = getElById('ratingCard')
const thankYouCard = getElById('thankYouCard')
const insertRating = getElById('insertRating')
const ratingContainer = getElById('ratingContainer')
const allRatingButtons = [...ratingContainer.children]
const submitBtn = getElById('sumbitBtn')

ratingContainer.addEventListener('click', onRateFn)

function onRateFn(e) {
    if (e.target.tagName.toLowerCase() !== 'button') {
        return
    }
    allRatingButtons.forEach((el) => {
        if (el === e.target) return
        el.classList.remove('bg-slate-400')
        el.classList.remove('text-gray-50')
    })
    e.target.classList.add('bg-slate-400')
    e.target.classList.add('text-gray-50')
    ratingStore.value = e.target.value
}

submitBtn.addEventListener('click', onSubmitFn)
function onSubmitFn(e) {
    insertRating.textContent = ratingStore.value
        ? ratingStore.value
        : 'nothing'
    ratingStore.value = undefined

    ratingCard.classList.add('rating__card--is-not-active')
    thankYouCard.classList.remove(
        'rating__card--is-not-active',
    )
}
