import * as Slider from "@radix-ui/react-slider";
import { twMerge } from "tailwind-merge";

const InputSlider = ({
  value,
  setSliderValue,
  className,
  rootClass,
  trackClass,
  rangeClass,
  thumbClass,
  max = 100000,
  min = 100,
  step = 1,
}) => {
  const handleSliderChange = (newValue) => {
    if (setSliderValue && Array.isArray(newValue)) {
      setSliderValue(newValue[0]);
    }
  };

  return (
    <div className={twMerge("w-full", className)}>
      <Slider.Root
        className={twMerge(
          "relative flex items-center select-none touch-none w-full h-5",
          rootClass
        )}
        max={max}
        min={min}
        step={step}
        value={[value]}
        onValueChange={handleSliderChange}
      >
        <Slider.Track
          className={twMerge(
            "bg-secondary-300 relative grow rounded-full h-[8px]",
            trackClass
          )}
        >
          <Slider.Range
            className={twMerge(
              "absolute bg-black rounded-full h-full",
              rangeClass
            )}
          />
        </Slider.Track>
        <Slider.Thumb
          className={twMerge(
            "block w-7 h-7 bg-white rounded-full border-black border-2",
            thumbClass
          )}
          aria-label="Value"
        />
      </Slider.Root>
    </div>
  );
};

export default InputSlider;
