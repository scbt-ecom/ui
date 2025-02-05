export const formatPhoneNumber = (phone: string): string => {
  return `${phone[0]} ${phone.slice(1, 4)} ${phone.slice(4, 7)}-${phone.slice(7, 9)}-${phone.slice(9)}`
}
