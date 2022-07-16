export const sum = (...arg) => {
    if(arg.length === 0) {
        throw Error('sum required at least 1 argument')
    }
    return arg.reduce((accum, curr) => accum + curr, 0)
}