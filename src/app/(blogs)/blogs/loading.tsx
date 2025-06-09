import Spinner from "@/ui/Spinner";

function loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-x-4">
      <span className="text-lg text-secondary-500">Loading data</span>
      <Spinner />
    </div>
  );
}

export default loading;
