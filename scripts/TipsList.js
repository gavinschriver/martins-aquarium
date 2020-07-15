import {makeCopyOfTipsCollection} from "./LocationsDataProvider.js"
import {makeAnHTMLTip} from "./tipsFactory.js"

export const listOfTips = () => {
    const whereToPutTipsinHTML = document.querySelector(".content--right")

    const tipArrayCopy = makeCopyOfTipsCollection()

    let allTipsAsHTML = ""
    for (const currentTipObj of tipArrayCopy) {
        allTipsAsHTML += `
        <aside class="tips">  <!--creates parent aside element -->
        ${allTipsAsHTML}
        <aside>
        `
    }
}