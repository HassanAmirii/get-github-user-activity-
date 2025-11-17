async function githubUserActivity(username) {
  const url = `https://api.github.com/users/${username}/events`;

  try {
    const response = await fetch(url, {
      "User-Agent": "githubUserActivity",
      Aceept: "application/vnd.github+json",
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(` error, username: ${username} not found `);
      }
      throw new Error(`Api request failed with ${response.status}`);
    }

    const eventData = await response.json();
    console.log(eventData);
    return eventData;
  } catch (error) {
    console.error(error);
  }
}
githubUserActivity("HassanAmirii");
