import { useQuery } from "@apollo/client";
import { GET_TOP_REPOSITORIES } from "../Graphql/Queries/git";
import { flattenNode } from "../Utils/flatten";

export const useGetRepositories = (queryString = "stars:>1000") => {
  const { data, loading, error } = useQuery(GET_TOP_REPOSITORIES, {
    variables: { queryString },
  });

  if (error) {
    console.error(error);
    return { data: [], loading: false, error };
  }

  const flattenedData = data && data.search && data.search.edges ? flattenNode(data.search.edges) : [];

  return { data: flattenedData, loading, error: null };
};
