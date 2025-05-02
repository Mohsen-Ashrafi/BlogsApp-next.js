"use client";
import useMoveBack from "@/hooks/useMoveBack";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
          <div>
            <h1 className="text-xl font-bold text-secondary-700 mb-8">
              The page you were looking for was not found.
            </h1>
            <Button
              variant="contained"
              onClick={moveBack}
              className="flex items-center gap-x-2 text-secondary-500"
            >
              <ArrowRightIcon className="w-6 h-6" />
              <span>Back</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
