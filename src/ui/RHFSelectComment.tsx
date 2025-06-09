import { UseFormRegister } from "react-hook-form";

interface Option {
  label: string;
  value: string | number;
}

interface RHFSelectCommentProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  options: Option[];
  isRequired?: boolean;
}

const RHFSelectComment: React.FC<RHFSelectCommentProps> = ({
  label,
  name,
  register,
  options,
  isRequired,
}) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {isRequired && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} id={name} className="textField__input">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default RHFSelectComment;
