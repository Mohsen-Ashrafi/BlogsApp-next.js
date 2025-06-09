interface EmptyProps {
  resourceName: string;
}

const Empty: React.FC<EmptyProps> = ({ resourceName }) => {
  return (
    <p className="font-bold text-secondary-700">No {resourceName} found.</p>
  );
};

export default Empty;
