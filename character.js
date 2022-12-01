function newPlayableCharacter(x, y) {
    const element = newImage('assets/character1/static.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/character1/static.gif`
        }
        if (direction === 'west') {
            element.src = `assets/character1/west.gif`
        }
        if (direction === 'north') {
            element.src = `assets/character1/north.gif`
        }
        if (direction === 'east') {
            element.src = `assets/character1/east.gif`
        }
        if (direction === 'south') {
            element.src = `assets/character1/south.gif`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}