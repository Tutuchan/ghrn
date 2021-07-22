import nodeNotifier from 'node-notifier'
import open from 'open'
import {computeRemainingTime, computeTimeout} from './time'
import {ReviewNotification} from './types'

export function handleReviews(reviews: ReviewNotification[], index: number, remainingTime: number): void {
  const review = reviews[index]
  const timeout = computeTimeout(remainingTime, reviews.length - index)
  nodeNotifier.notify(
    {
      title: review.title,
      subtitle: review.subtitle,
      message: review.message,
      timeout: timeout,
    },
    function (error: any, response: any, metadata: any) {
      if (response === 'activate') {
        open(review.url,)
      }
      if (index < reviews.length - 1) {
        const newRemainingTime = remainingTime - computeRemainingTime(metadata.deliveredAt, metadata.activationAt)
        handleReviews(reviews, index + 1, newRemainingTime)
      }
    }
  )
}
