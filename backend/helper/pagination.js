const paginationFromTo = ({ from, to }) => {
    const defaultLimit = 10
    if (from && to) {
        const offset = Number(from) ? from - 1 : 0
        const limit = Number(to) ? Number(to - from) + 1 : defaultOffset
        return { offset, limit }
    } else {
        if (from && !to) {
            const offset = from - 1 > 0 ? from - 1 : 0
            const limit = defaultLimit
            return { offset, limit }
        }
        if (!from && to) {
            const offset = to - defaultLimit > 0 ? to - defaultLimit : 0
            const limit =  Number(to) <= defaultLimit && Number(to) > 0 ? Number(to) : defaultLimit
            return { offset, limit }
        }
    }
}

module.exports = { paginationFromTo }