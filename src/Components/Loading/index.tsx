import { Spinner } from "react-bootstrap";
import { FC } from "react";

export interface LoadingProps {
  message?: string;
}

const Loading: FC<LoadingProps> = ({ message = "Loading..." }) => {
  return (
    <div className="alert alert-primary d-flex align-items-center">
      <Spinner size="sm" className="me-2"/>
      {message}
    </div>
  );
};

export default Loading;