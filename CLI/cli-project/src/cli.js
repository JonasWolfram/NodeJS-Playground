import arg from "arg";
import inquirer from "inquirer";

function parseArgumentsIntoOptions(rawArgs) {
  const args = args(
    {
      "--git": Boolean,
      "--yes": Boolean,
      "-g": "--git",
      "-y": "--yes",
      "-i": "--install",
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    skipPrompts: args["--yes"] || false,
    git: args["--git"] || false,
    template: args._[0],
    runInstall: args["--install"] || false,
  };
}

async function promptForMissingOptions(options) {
  const defaultTemplate = "JavaScript";
  if (options.skipPrompts) {
    return { ...options, template: options.template || defaultTemplate };
  }

  const questions = [];
  if (!options.template) {
    questions.push({
      type: "list",
      name: "template",
      message: "Wähle ein Projekt-Template aus:",
      choices: ["JavaScript", "TypeScript"],
    });

    if (!options.git) {
      questions.push({
        type: "confirm",
        name: "git",
        message: "Git-Repository anlegen?",
        default: false,
      });
    }
  }

  const answer = await inquirer.prompt(questions);
  return {
    ...options,
    template: options.template || answer.template,
    git: options.git || answer.git,
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  console.log(options);
}
