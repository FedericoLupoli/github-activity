import chalk from "chalk";
import { fetchUserEvents } from "../utils/github.api.js";
import { displayEvents } from "../utils/event.formatter.js";

/**
 * Fetch and display GitHub activity for a user
 * @param {string} username - GitHub username
 */
export async function fetchCommand(username) {
  console.log(
    chalk.blue.bold(`\n🔄 Fetching GitHub activity for user: ${username}\n`),
  );

  try {
    const events = await fetchUserEvents(username);
    displayEvents(events, username);
  } catch (error) {
    console.log(
      chalk.red(`❌ Error fetching GitHub activity: ${error.message}\n`),
    );
  }
}
