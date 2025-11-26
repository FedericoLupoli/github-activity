/**
 * Fetches public events for a given GitHub user
 * @param {string} username - GitHub username
 * @returns {Promise<Array>} Array of events
 * @throws {Error} If the API request fails
 */
export async function fetchUserEvents(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/events/public`,
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}
