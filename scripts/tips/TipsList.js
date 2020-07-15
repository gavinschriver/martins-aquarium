import {makeCopyOfTipsCollection} from "./TipsDataProvider.js"
import {makeAnHTMLTip} from "./tipsFactory.js"

export const listOfTips = () => {
    const whereToPutTipsinHTML = document.querySelector(".content--right")

    const tipsArrayCopy = makeCopyOfTipsCollection()

    let allTipsAsHTML = ""
    for (const currentTipObj of tipsArrayCopy) {
        allTipsAsHTML += makeAnHTMLTip(currentTipObj)
    }

    whereToPutTipsinHTML.innerHTML += `
        <aside class="tips"> 
        ${allTipsAsHTML}
        </aside>
    ` 
}