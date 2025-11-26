#!/usr/bin/env node

import { program } from "commander";

import { helpCommand } from "../src/commands/help.command.js";
import { fetchCommand } from "../src/commands/fetch.command.js";

program.name("github-activity").version("1.0.0");

program.command("help").action(helpCommand);

program
  .command("fetch <username>")
  .description(
    "Fetch and display recent GitHub activity for the specified user",
  )
  .action(async (username) => {
    await fetchCommand(username);
  });

program.parse(process.argv);
