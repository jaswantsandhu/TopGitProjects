import { FC } from "react";

export interface ErrorAlertProps {
  message?: string;
}

const ErrorAlert: FC<ErrorAlertProps> = ({ message = "An unexpected error has occurred. Please try again." }) => {
  return <div className="alert alert-danger">{message}</div>;
};

export default ErrorAlert;
