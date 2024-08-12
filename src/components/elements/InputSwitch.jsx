import * as Switch from "@radix-ui/react-switch";
import { twMerge } from "tailwind-merge";

const InputSwitch = ({
  isChecked,
  setIsChecked,
  label = "Airplane mode",
  switchClass,
  thumbClass,
  labelClass,
  rootClass,
}) => {
  const handleSwitchChange = (checked) => {
    if (setIsChecked) {
      setIsChecked(checked);
    }
  };

  return (
    <div className={twMerge("flex items-center", rootClass)}>
      <label
        className={twMerge(
          "text-secondary-900 text-[15px] leading-none pr-[15px]",
          labelClass
        )}
        htmlFor="airplane-mode"
      >
        {label}
      </label>
      <Switch.Root
        className={twMerge(
          "w-[42px] h-[25px] bg-secondary-200 rounded-full relative data-[state=checked]:bg-black outline-none cursor-default",
          switchClass
        )}
        id="airplane-mode"
        checked={isChecked}
        onCheckedChange={handleSwitchChange}
        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
      >
        <Switch.Thumb
          className={twMerge(
            "block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]",
            thumbClass
          )}
        />
      </Switch.Root>
    </div>
  );
};

export default InputSwitch;
