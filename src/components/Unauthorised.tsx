type Props = {
  status?: number;
  statusText?: string;
};

const Unauthorised = (props: Props) => {
  const { status, statusText } = props;
  return (
    <div>
      <h1>
        {status}: {statusText}
      </h1>
      <p>
        Oops! Looks like you tried to visit a page that you do not have access
        to.
      </p>
    </div>
  );
};

export default Unauthorised;
