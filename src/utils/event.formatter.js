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
  const date = new Date(event.created_at).toLocaleString();
  return `${event.type} at ${date}`;
}
