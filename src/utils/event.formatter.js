import chalk from "chalk";

export function displayEvents(events, username, limit = 5) {
  if (events.length === 0) {
    console.log(
      chalk.yellow(`No recent activity found for user: ${username}\n`),
    );
    return;
  }

  console.log(chalk.green.bold(`Recent GitHub Activity for ${username}:\n`));

  events.slice(0, limit).forEach((event) => {
    const formattedEvent = formatEvent(event);
    console.log(chalk.white(`- ${formattedEvent}`));
  });

  console.log();
}

/**
 * Format a single GitHub event
 * @param {Object} event - GitHub event object
 * @returns {string} Formatted event string
 */
function formatEvent(event) {
  const repo = event.repo.name;
  const payload = event.payload;

  switch (event.type) {
    case "PushEvent":
      const commitCount = payload.commits?.length || 0;
      return `Pushed ${commitCount} commit${
        commitCount !== 1 ? "s" : ""
      } to ${repo}`;

    case "PullRequestEvent":
      const action = payload.action;
      const prNumber = payload.pull_request?.number;
      return `${capitalize(action)} pull request #${prNumber} in ${repo}`;

    case "IssuesEvent":
      const issueAction = payload.action;
      const issueNumber = payload.issue?.number;
      return `${capitalize(issueAction)} issue #${issueNumber} in ${repo}`;

    case "IssueCommentEvent":
      const commentIssue = payload.issue?.number;
      return `Commented on issue #${commentIssue} in ${repo}`;

    case "WatchEvent":
      return `Starred ${repo}`;

    case "ForkEvent":
      return `Forked ${repo}`;

    case "CreateEvent":
      const refType = payload.ref_type;
      const ref = payload.ref;
      if (refType === "repository") {
        return `Created repository ${repo}`;
      }
      return `Created ${refType}${ref ? ` "${ref}"` : ""} in ${repo}`;

    case "DeleteEvent":
      const deleteRefType = payload.ref_type;
      const deleteRef = payload.ref;
      return `Deleted ${deleteRefType} "${deleteRef}" in ${repo}`;

    case "PullRequestReviewEvent":
      const reviewPr = payload.pull_request?.number;
      return `Reviewed pull request #${reviewPr} in ${repo}`;

    case "PullRequestReviewCommentEvent":
      const commentPr = payload.pull_request?.number;
      return `Commented on pull request #${commentPr} in ${repo}`;

    case "ReleaseEvent":
      const releaseName = payload.release?.tag_name;
      return `Published release ${releaseName} in ${repo}`;

    case "MemberEvent":
      const memberAction = payload.action;
      const member = payload.member?.login;
      return `${capitalize(memberAction)} ${member} to ${repo}`;

    default:
      return `${event.type.replace("Event", "")} in ${repo}`;
  }
}

/**
 * Capitalize first letter of a string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
