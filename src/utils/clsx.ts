const clsx = (...classNames: (string | boolean | undefined | null)[]): string => {
  return classNames.filter(className => className).join(" ");
}

export default clsx;