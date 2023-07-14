import { renderHook, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_TOP_REPOSITORIES } from "../Graphql/Queries/git";
import { useGetRepositories } from "./useGitStars";

const mockNode = {
  __typename: "Repository",
  id: "1",
  name: "TopGitProjects",
  url: "https://github.com/jaswantsandhu/TopGitProjects",
  description: "This is a dummy repo",
  stargazers: {
    totalCount: 100,
  },
  forks: {
    totalCount: 100,
  },
  owner: {
    url: "https://github.com/jaswantsandhu/",
    avatarUrl: "https://github.com/jaswantsandhu/TopGitProjects",
    login: "jaswantsandhu",
  },
};

const mocks = [
  {
    request: {
      query: GET_TOP_REPOSITORIES,
      variables: {
        queryString: "stars:>1000",
      },
    },
    result: {
      data: {
        search: {
          edges: [
            {
              node: mockNode,
            },
          ],
        },
      },
    },
  },
];

test("useGetRepositories to verify data is loaded successfully.", async () => {
  const { result } = renderHook(() => useGetRepositories(), {
    wrapper: ({ children }) => {
      return (
        <MockedProvider addTypename={false} mocks={mocks}>
          {children}
        </MockedProvider>
      );
    },
  });

  expect(result.current.loading).toBeTruthy();

  await waitFor(() => {
    expect(result.current.loading).toBeFalsy();
  });

  const { __typename, ...resultNode } = mockNode;

  expect(result.current.data).toEqual([resultNode]);
});
