"use client";
import { Button } from "@mui/material";
import { JSX } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

function Error({ error, reset }: ErrorProps): JSX.Element {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <div>
          <p className="text-xl font-bold text-red-500 mb-8">{error.message}</p>
          <Button
            variant="contained"
            onClick={reset}
            className="flex items-center gap-x-2 text-secondary-500"
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Error;
