const minimist = require("minimist");

const option = {
  string: "username",

  alias: {
    username: "u",
  },
};

const args = minimist(process.argv.slice(2), option);
const githubUsername = args.username;

if (!githubUsername) {
  console.log("please provide a username");
  console.log('sage node index.js --u "username"');
  process.exit(1);
}

async function githubUserActivity(username) {
  const url = `https://api.github.com/users/${username}/events`;

  try {
    const response = await fetch(url, {
      "User-Agent": "githubUserActivity",
      Accept: "application/vnd.github+json",
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(` error, username: ${username} not found `);
      }
      throw new Error(`Api request failed with ${response.status}`);
    }

    const event = await response.json();
    return event;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function summarizeEventSummary(event) {
  let summaryText;

  const type = event.type;
  const repoName = event.repo ? event.repo.name : "unknown repo";

  switch (type) {
    case "PushEvent":
      const commitsArray = event.payload.commits;
      const counts =
        commitsArray && Array.isArray(commitsArray) ? commitsArray.length : 1;
      summaryText = `pushed ${counts} commits to ${repoName}`;
      break;
    case "CreateEvent":
      summaryText = `created a ${event.payload.ref_type} in ${repoName}`;
      break;
    case "ForkEvent":
      summaryText = ` forked ${repoName}`;
      break;
    case "WatchEvent":
      summaryText = `starred ${repoName}`;
      break;
    default:
      summaryText = `performed a generic ${type.replace("Event", "")} on ${repoName}`;
      break;
  }
  return summaryText;
}

async function main() {
  let topThreeEventArray;
  const eventArray = await githubUserActivity(githubUsername);
  if (eventArray === null) return;
  if (eventArray.length === 0) {
    console.log(`no recent activity found for user:- ${githubUsername}`);
    return;
  }
  if (eventArray.length >= 3) {
    topThreeEventArray = eventArray.slice(0, 3);
    console.log(`\n - recent activities for ${githubUsername} \n `);
    topThreeEventArray.forEach((event) => {
      console.log(summarizeEventSummary(event));
      return;
    });
  } else {
    console.log(`\n - recent activities for ${githubUsername} \n `);
    eventArray.forEach((event) => {
      console.log(summarizeEventSummary(event));
    });
  }
}

main();
