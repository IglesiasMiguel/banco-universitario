import cnMerge from "../../utils/classnamesMerge";

const inputClasses = {
  root: "group relative h-14 border-b-2 border-[#a5a5a6]",
  label: "uppercase absolute left-2 top-1/2 z-0 -translate-y-1/2 bg-white px-1 text-sm text-[#a5a5a6] pointer-events-none duration-200 group-focus-within:top-0 group-focus-within:text-xs group-focus-within:text-primary",
  input: "z-10 h-full w-full px-3.5 py-4 outline-none",
};

const StyledInput = ({ placeholder, helperText, error = false, ...props }) => {

  const errorClass = error && "border-red-500";
  const errorLabelClass = error && "text-red-500";

  return (
    <div className={cnMerge([inputClasses.root, errorClass])}>
      <label
        className={cnMerge([inputClasses.label, errorLabelClass, props.value && 'top-0 text-xs'])}
        htmlFor={props.id ?? props.name}
      >
        {placeholder}
      </label>
      <input
        id={props.id ?? props.name}
        {...props}
        className={inputClasses.input}
      />
      {error &&
        <p
          className="text-red-500 leading-4 text-xs text-justify pt-2"
        >
          {helperText}
        </p>
      }
    </div>
  );
};

export default StyledInput;