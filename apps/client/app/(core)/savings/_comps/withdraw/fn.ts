export function dateFromBigint(params: BigInt) {
  let timestampInMilliseconds = Number(params) * Number(1000n)

  let timestamp = Number(timestampInMilliseconds)
  let date = new Date(timestamp)
  return date.toString()
}

export function getDate(params: BigInt) {
  let timestampInMilliseconds = Number(params) * Number(1000n)

  let timestamp = Number(timestampInMilliseconds)

  return new Date(timestamp)
}

export const canWithdraw = (expiresAt: Date) => expiresAt.getTime() < Date.now()
