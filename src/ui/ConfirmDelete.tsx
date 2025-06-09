import { TrashIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { FC, FormEvent } from "react";

interface ConfirmDeleteProps {
  resourceName: string;
  onClose: () => void;
  disabled?: boolean;
  onConfirm: (e: FormEvent<HTMLFormElement>) => void;
}

const ConfirmDelete: FC<ConfirmDeleteProps> = ({
  resourceName,
  onClose,
  disabled,
  onConfirm,
}) => {
  return (
    <div>
      <h2 className="font-bold text-base mb-8 text-secondary-700">
        Are you sure you want to delete {resourceName}?
      </h2>
      <form onSubmit={onConfirm}>
        <div className="flex justify-between items-center gap-x-16">
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onConfirm(e as unknown as FormEvent<HTMLFormElement>);
            }}
            disabled={disabled}
            variantType="danger"
            className="flex gap-x-2 justify-center items-center flex-1"
          >
            <TrashIcon className="w-5" />
            <span>Delete</span>
          </Button>
          <Button
            className="flex-1"
            variantType="outline"
            onClick={onClose}
            type="button"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
export default ConfirmDelete;
