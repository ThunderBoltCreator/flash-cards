export const isValidInputValue = (regExp: RegExp, value: string) => {
  return regExp.test(value)
}
