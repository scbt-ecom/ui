export function createPhoneNumber(numbers: string, phoneMask: string = 'x xxx xxx-xx-xx'): string {
  let mask = phoneMask

  for (let i = 0; i < numbers.length; i++) {
    mask = mask.replace('x', numbers[i])
  }

  return mask
}
