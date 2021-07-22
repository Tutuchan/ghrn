import {RestEndpointMethodTypes} from '@octokit/plugin-rest-endpoint-methods'

export type NotificationsResponse = RestEndpointMethodTypes['activity']['listNotificationsForAuthenticatedUser']['response']

export type NotificationOwner = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string | null;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}
export type ReviewRequestedResponse = {
    id: string;
    repository: {
      id: number;
      node_id: string;
      name: string;
      full_name: string;
      owner: NotificationOwner | null;
      private: boolean;
      html_url: string;
      description: string | null;
      fork: boolean;
      url: string;
      archive_url: string;
      assignees_url: string;
      blobs_url: string;
      branches_url: string;
      collaborators_url: string;
      comments_url: string;
      commits_url: string;
      compare_url: string;
      contents_url: string;
      contributors_url: string;
      deployments_url: string;
      downloads_url: string;
      events_url: string;
      forks_url: string;
      git_commits_url: string;
      git_refs_url: string;
      git_tags_url: string;
      git_url?: string | undefined;
      issue_comment_url: string;
      issue_events_url: string;
      issues_url: string;
      keys_url: string;
      labels_url: string;
      languages_url: string;
      merges_url: string;
      milestones_url: string;
      notifications_url: string;
      pulls_url: string;
      releases_url: string;
      ssh_url?: string | undefined;
      stargazers_url: string;
      statuses_url: string;
      subscribers_url: string;
      subscription_url: string;
      tags_url: string;
      teams_url: string;
      trees_url: string;
      hooks_url: string;
    };
    subject: {
      title: string;
      url: string;
      latest_comment_url: string;
      type: string;
    };
    reason: string;
    unread: boolean;
    updated_at: string;
    last_read_at?: string | null;
    url: string;
    subscription_url: string;
}

export type ReviewNotification = {
    title: string;
    subtitle: string;
    message: string;
    url: string;
}
