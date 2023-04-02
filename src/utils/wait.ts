export function wait(delay: number, type: 'res' | 'rej') {
  return new Promise((res, rej) => {
    if (type === 'res') {
      return setTimeout(res, delay * 1000)
    }

    if (type === 'rej') {
      return setTimeout(rej, delay * 1000)
    }
  })
}