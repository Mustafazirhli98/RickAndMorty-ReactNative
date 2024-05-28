import { useState } from "react"

const UseFilter = (data, dataTitle) => {
    const [filteredData, setFilteredData] = useState([])
    const [isSearchSuccess, setIsSearchSuccess] = useState(false)

    const checkFilter = (enteredText) => {
        const searchResult = data.filter(item => {
            if (dataTitle === "episode") {
                return (
                    item.name.toLowerCase() === enteredText.toLowerCase() ||
                    item.episode.toLowerCase() === enteredText.toLowerCase() ||
                    item.air_date.toLowerCase() === enteredText.toLowerCase()
                )
            }
            else if (dataTitle === "character") {
                return (
                    item.name.toLowerCase() === enteredText.toLowerCase() ||
                    item.gender.toLowerCase() === enteredText.toLowerCase() ||
                    item.status.toLowerCase() === enteredText.toLowerCase() ||
                    item.species.toLowerCase() === enteredText.toLowerCase()
                )
            }
        })

        if (searchResult.length > 0) {
            setIsSearchSuccess(true)
            setFilteredData(searchResult)
        } else {
            setIsSearchSuccess(false)
        }
    }

    return { filteredData, isSearchSuccess, checkFilter }
}

export default UseFilter