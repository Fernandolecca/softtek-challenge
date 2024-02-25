type Props = {
  name: string;
  active: boolean;
  className: string;
};

export function StepText({ name, className, active }: Props) {
  const currentModifier = active
    ? "step__text--active"
    : "step__text--inactive";

  return <span className={`${className} ${currentModifier}`}>{name}</span>;
}
