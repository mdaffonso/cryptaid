export const createUID = (numberOfChars: number) => {
  const validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let randomId = validChars[Math.floor(Math.random() * (validChars.length-10))]
  for (let i = 1; i < numberOfChars; i++) {
    randomId += validChars[Math.floor(Math.random() * validChars.length)]
  }

  return randomId
}