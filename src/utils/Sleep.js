export const sleep = (length) => new Promise(
    (resolve) => setTimeout(resolve, 25 + (1500 / length))
)