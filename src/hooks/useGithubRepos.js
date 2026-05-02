import { useEffect, useState } from "react";
import { fetchRepos } from "../api/github";

export const useGithubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getRepos = async () => {
      try {
        const data = await fetchRepos();

        // ✅ SIMPLE FILTER (don’t over-filter)
       const filtered = data; // instead of filtering

        setRepos(filtered);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch repositories");
      } finally {
        setLoading(false);
      }
    };

    getRepos();
  }, []);

  return { repos, loading, error };
};