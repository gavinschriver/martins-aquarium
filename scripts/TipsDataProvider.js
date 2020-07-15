const tipsCollection = [
    {
        tip: "Please keep your tank clean. Don't let it get gross."
    },
    {
        tip: "pH levels should be OPTIMAL and never SUBOPTIMAL"
    },
    {
        tip: "Yum yum. Lap it all up. Clean that tank right out."
    }
]

export const makeCopyOfTipsCollection = () => {
    return tipsCollection.slice()
}