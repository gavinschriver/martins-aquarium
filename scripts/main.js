import { useFish } from "./FishDataProvider.js"

const allTheFish = useFish()

for(const fishObj of allTheFish){
    console.log(fishObj)
}
