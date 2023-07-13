import { render, screen } from "@testing-library/react";
import GitGrid from "../GitGrid";

test("renders GitGrid", () => {
  render(<GitGrid data={[]} />);

  // Test if table headers are properly rendered
  const projectHeader = screen.getByText(/Project \/ Git/i);
  const descriptionHeader = screen.getByText(/Description/i);
  const ownerHeader = screen.getByText(/Owner/i);
  const starHeader = screen.getByText("⭐️");
  const forkHeader = screen.getByText("🍴");

  expect(projectHeader).toBeInTheDocument();
  expect(descriptionHeader).toBeInTheDocument();
  expect(ownerHeader).toBeInTheDocument();
  expect(starHeader).toBeInTheDocument();
  expect(forkHeader).toBeInTheDocument();
});

test("displays git repository data", () => {
  const testData = [
    {
      id: "1",
      name: "TestRepo",
      description: "This is a test",
      url: "http://github.com/test",
      owner: {
        login: "testUser",
        url: "http://github.com/testUser",
        avatarUrl: "http://github.com/testUser/avatar.png",
      },
      stargazers: {
        totalCount: 1000,
      },
      forks: {
        totalCount: 500,
      },
    },
  ];

  render(<GitGrid data={testData} />);

  // Test if the repository name, owner, and counts are properly displayed
  const repoName = screen.getByText(/TestRepo/i);
  const repoDescription = screen.getByText(/This is a test/i);
  const repoOwner = screen.getByText(/testUser/i);
  const starCount = screen.getByText("1,000");
  const forkCount = screen.getByText("500");

  expect(repoName).toBeInTheDocument();
  expect(repoDescription).toBeInTheDocument();
  expect(repoOwner).toBeInTheDocument();
  expect(starCount).toBeInTheDocument();
  expect(forkCount).toBeInTheDocument();
});
