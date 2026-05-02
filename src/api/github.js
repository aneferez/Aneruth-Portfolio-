export const fetchRepos = async () => {
  try {
    const res = await fetch(
      "https://api.github.com/users/aneferez/repos?per_page=100&sort=updated"
    );

    const data = await res.json();

    return data.map((repo) => ({
      id: repo.id,
      name: repo.name.replace(/[-_]/g, " "),
      description: repo.description || "No description provided",
      stars: repo.stargazers_count,
      language: repo.language || "Unknown",
      url: repo.html_url,
      updated: repo.updated_at,
    }));
  } catch (err) {
    console.error("GitHub fetch error:", err);
    return [];
  }
};