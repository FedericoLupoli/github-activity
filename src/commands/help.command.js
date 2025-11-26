import chalk from "chalk";

export function helpCommand() {
  console.log("\n" + "=".repeat(50));
  console.log(chalk.cyan.bold("🚀 GitHub Activity CLI Tool"));
  console.log("=".repeat(50) + "\n");

  console.log(chalk.white.bold("Usage:"));
  console.log(
    "  " + chalk.green("github-activity ") + chalk.yellow("<username>"),
  );
  console.log();

  console.log(chalk.white.bold("Description:"));
  console.log("  Fetch and display recent GitHub activity for any user");
  console.log();

  console.log(chalk.white.bold("Example:"));
  console.log("  " + chalk.green("github-activity ") + chalk.yellow("octocat"));
  console.log("\n" + "=".repeat(50) + "\n");
}
