import {Octokit} from '@octokit/core'
import {restEndpointMethods} from '@octokit/plugin-rest-endpoint-methods'
import {ReviewNotification, NotificationsResponse} from './types'

const OctokitWithRest = Octokit.plugin(restEndpointMethods)
const octokit = new OctokitWithRest({auth: process.env.GITHUB_TOKEN})

function buildPullRequestURL(notificationUrl: string): string {
  return notificationUrl.replace('api.github.com/repos/', 'github.com/').replace('/pulls/', '/pull/')
}

export async function listNotifications(): Promise<ReviewNotification[]> {
  const notifications: NotificationsResponse = await octokit.rest.activity.listNotificationsForAuthenticatedUser()
  return notifications.data.filter(notification => notification.reason === 'review_requested').map(notification => {
    return {
      title: 'Review requested',
      subtitle: notification.repository.name,
      message: notification.subject.title,
      url: buildPullRequestURL(notification.subject.url),
    }
  })
}
