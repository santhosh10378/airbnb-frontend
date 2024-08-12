import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "../../assets";
import { twMerge } from "tailwind-merge";

const InputCheckbox = ({
  label,
  item,
  selectedItems,
  setSelectedItems,
  className,
  rootClass,
  indicatorClass,
  labelClass,
}) => {
  const handleCheckboxChange = (isChecked) => {
    if (isChecked) {
      setSelectedItems((prevItems) => [...prevItems, item]);
    } else {
      setSelectedItems((prevItems) => prevItems.filter((i) => i !== item));
    }
  };

  return (
    <div className={twMerge("flex items-center", className)}>
      <Checkbox.Root
        className={twMerge(
          "flex items-center justify-center w-[25px] h-[25px] rounded-md outline-none bg-secondary-200 data-[state=checked]:bg-secondary-800 transition-colors duration-150",
          rootClass
        )}
        checked={selectedItems.includes(item)}
        id={label}
        onCheckedChange={(isChecked) => handleCheckboxChange(isChecked)}
      >
        <Checkbox.Indicator
          className={twMerge(
            "flex items-center justify-center w-full h-full text-white",
            indicatorClass
          )}
        >
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label
        className={twMerge(
          "pl-[10px] text-[15px] leading-none text-black capitalize",
          labelClass
        )}
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
};

export default InputCheckbox;
