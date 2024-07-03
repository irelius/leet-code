export const longPressedName = (name, typed) => {
    let namePointer = 0;
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === name[namePointer]) {
            namePointer++
        } else if (typed[i] === name[namePointer - 1]) {
            continue;
        } else {
            return false
        }
    }

    return name.length === namePointer
}
