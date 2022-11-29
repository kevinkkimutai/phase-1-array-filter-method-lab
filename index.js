function findMatching(drivers, name) {

    return drivers.filter(findName => {
        return (findName.toLowerCase() === name.toLowerCase())
    }
    )
}


function fuzzyMatch(drivers, letter) {
    return drivers.filter(findName => {
        if (letter.charAt(0) === findName.charAt(0)) {
            return findName
        }
    })
}

function matchName(drivers, name) {
    return drivers.filter(findName => {
        if (findName.name == name) {
            return findName
     
        }
    })
}