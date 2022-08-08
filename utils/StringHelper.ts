export const getRandomStr = (lenght: number): string => {
    return randomizer(lenght, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
}

export const randomizer = (lenght: number, inputStr: string): string => {
    let result = ""
    const charactersLength: number = inputStr.length
    for (let i = 0; i < lenght; i = i + 1) {
        result += inputStr.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}