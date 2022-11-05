let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    let appendCat = cats.push(name)
    return appendCat
}

function destructivelyPrependCat(name){
    let prependCat = cats.unshift(name)
    return prependCat
}

function destructivelyRemoveLastCat(name){
    let removeLastCat = cats.pop(name)
    return removeLastCat
}

function destructivelyRemoveFirstCat(name){
    let removeFirstCat = cats.shift(name)
    return removeFirstCat
}

function appendCat(name){
    let addCat = [...cats, name]
    return addCat
}

function prependCat(name){
    let addCat = [name, ...cats]
    return addCat
}

function removeLastCat(){
    let arrays = cats.slice(0, cats.length -1)
    return arrays
}

function removeFirstCat(){
    let arrays = cats.slice(1)
    return arrays
}