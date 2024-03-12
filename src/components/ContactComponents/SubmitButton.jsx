import cnMerge from "../../utils/classnamesMerge";

const buttonClasses = {
  root: "bg-transparent hover:bg-[#a5a5a6] text-[#a5a5a6] font-semibold hover:text-white py-2 px-4 border border-[#a5a5a6] hover:border-transparent"
};

const SubmitButton = ({ label = "", ...props }) => {

  return (
    <button
      {...props}
      className={cnMerge([buttonClasses.root])}
    >
      {label}
    </button>
  );
};

export default SubmitButton;