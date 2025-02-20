export function createPhoneNumber(numbers: string, phoneMask: string = 'x xxx xxx-xx-xx'): string {
  for (let i = 0; i < numbers.length; i++) {
    phoneMask = phoneMask.replace('x', numbers[i])
  }

  return phoneMask
}
