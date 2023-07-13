import ErrorAlert from "../../Components/Error";
import GitGrid from "../../Components/GitGrid";
import Loading from "../../Components/Loading";
import { useGetRepositories } from "../../Hooks/useGitStars";

const TopRepositories = () => {
  const { data, loading, error } = useGetRepositories();

  if (loading) {
    return <Loading message="Fetching repositories..." />;
  }

  if (error) {
    return <ErrorAlert message={error.message || "An error occurred while fetching repositories"} />;
  }

  if (!data || data.length === 0) {
    return <ErrorAlert message="No repositories found" />;
  }

  return <GitGrid data={data} />;
};

export default TopRepositories;
