async function githubUserActivity(username) {
  const url = `https://api.github.com/users/${username}/events`;

  try {
    const response = await fetch(url, {
      "User-Agent": "githubUserActivity",
      Aceept: "application/vnd.github+json",
    });
  } catch (error) {
    console.error(error);
  }
}
