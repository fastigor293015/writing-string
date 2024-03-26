import { useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";
import clsx from "../../utils/clsx";
import styles from "./writingString.module.css";

interface WritingStringProps {
  stringsArr: string[];
  delay?: number;
  className?: string;
}

const WritingString: React.FC<WritingStringProps> = ({
  stringsArr,
  delay = 1000,
  className
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [state, setState] = useState<"forward" | "reverse">("forward");
  const [stringNumber, setStringNumber] = useState(0);
  const [output, setOutput] = useState("");
  const [index, setIndex] = useState(0);

  useInterval(() => {
    if (isPaused) return;
    if (state === "forward") {
      setIndex(prev => prev + 1);
      if (index + 1 === stringsArr[stringNumber].length) {
        setState("reverse");
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
        }, delay);
        return;
      }
    } else if (state === "reverse") {
      setIndex(prev => prev - 1 < 0 ? 0 : prev - 1);
      if (index === 0) {
        setStringNumber(prev => prev + 1 === stringsArr.length ? 0 : prev + 1);
        setState("forward");
        return;
      }
    }
  }, 100);

  useEffect(() => {
    console.log(index)
    setOutput(stringsArr[stringNumber].slice(0, index));
  }, [stringsArr, stringNumber, index]);

  return (
    <span className={clsx(styles.string, className)}>
      {output}
    </span>
  );
}

export default WritingString;
