type Props = {
  active: boolean;
  stepNumber: number;
  className: string;
};

export function StepNumberIndicator({ active, stepNumber, className }: Props) {
  const currentModifier = active
    ? "step__indicator--active"
    : "step__indicator--inactive";

  return <div className={`${className} ${currentModifier}`}>{stepNumber}</div>;
}
