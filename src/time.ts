import dayjs from 'dayjs'

export function computeRemainingTime(start: string, end: string): number {
  return dayjs(end).diff(dayjs(start), 'second')
}

export function computeTimeout(remainingTime: number, remainingRequests: number): number {
  return remainingTime / remainingRequests
}
