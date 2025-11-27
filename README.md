# GitHub User Activity CLI

A command-line interface (CLI) tool designed to effortlessly retrieve and summarize the recent public activity of any GitHub user. This utility provides quick insights into a user's contributions, making it easy to track pushes, creations, forks, and stars directly from your terminal.

## Features

- **Fetch GitHub User Activity:** Retrieves a stream of recent public events for a specified GitHub user using the GitHub API.
- **Event Summarization:** Parses various GitHub event types (e.g., PushEvent, CreateEvent, ForkEvent, WatchEvent) and presents them in a human-readable summary.
- **Command-Line Interface:** Offers straightforward execution via command-line arguments.
- **Error Handling:** Includes robust error handling for cases where a GitHub username is not provided or not found.

## Getting Started

### Usage

To run the GitHub User Activity CLI, follow these steps:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/HassanAmirii/get-github-user-activity-.git
    cd get-github-user-activity-
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Execute the Tool:**
    Run the `index.js` script with the `--username` or `-u` flag, followed by the GitHub username you wish to query.

    ```bash
    # Using the full flag
    node index.js --username "HassanAmirii"

    # Using the shorthand alias
    node index.js -u "HassanAmirii"
    ```

### Example Output

```
$ node index.js -u HassanAmirii

 - recent activities for HassanAmirii

pushed 1 commits to HassanAmirii/HassanAmirii
starred HassanAmirii/HassanAmirii
created a branch in HassanAmirii/HassanAmirii
pushed 2 commits to HassanAmirii/HassanAmirii
```

## Technologies Used

| Technology | Description                                  |
| :--------- | :------------------------------------------- |
| Node.js    | JavaScript runtime for server-side execution |
| Minimist   | Parser for command-line arguments            |

[project file](https://roadmap.sh/projects/github-user-activity)
