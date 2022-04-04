import hardware from "../assets/hardware.png";
import peripherals from "../assets/peripherals.png";
import software from "../assets/software.png";
import another from "../assets/another.png";

const getIconCategory = (category: string) => {
  if (category === "hardware") return hardware;
  if (category === "peripherals") return peripherals;
  if (category === "software") return software;
  if (category === "another") return another;

  return undefined;
};

export default getIconCategory;
