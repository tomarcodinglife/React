import { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(val) {
    console.log(val);

    if (typeof val != "boolean") {
      setValue(!value);
    } else {
      setValue(val);
    }
  }

  return [value, toggleValue];
};

export default useToggle;
