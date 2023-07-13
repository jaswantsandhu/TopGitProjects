import { Table } from "react-bootstrap";
import { Git } from "../../Interfaces/git";
import { FC } from "react";
import "./GitGrid.css";

export interface GitGridProps {
  data: Git[];
}

const creatingGridItems = (data: Git[]) => {
  return data.map((git: Git) => {
    return (
      <tr key={git.id}>
        <td className="td-width-20-per">
          <a
            target="_blank"
            rel="noopener noreferrer"
            title={`Navigate to Git: ${git.name}`}
            href={git.url}
          >
            {git.name}
          </a>
        </td>
        <td>{git.description}</td>
        <td className="td-width-20-per">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={git.owner.url}
            title={`Navigate to Git user: ${git.owner.login}`}
          >
            <img
              className="userAvatarImage"
              src={git.owner.avatarUrl}
              alt={`Avatar for ${git.owner.login}`}
            />
            {git.owner.login}
          </a>
        </td>
        <td className="td-width-10-per" aria-label="Star Count">
          {git.stargazers.totalCount.toLocaleString("en-GB")}
        </td>
        <td className="td-width-10-per" aria-label="Forks Count">
          {git.forks.totalCount.toLocaleString("en-GB")}
        </td>
      </tr>
    );
  });
};

const GitGrid: FC<GitGridProps> = ({ data }) => {
  return (
    <Table bordered hover striped>
      <thead>
        <tr>
          <th>Project / Git</th>
          <th>Description</th>
          <th>Owner</th>
          <th aria-label="Star Count">⭐️</th>
          <th aria-label="Forks Count">🍴</th>
        </tr>
      </thead>
      <tbody>{data && creatingGridItems(data)}</tbody>
    </Table>
  );
};

export default GitGrid;
