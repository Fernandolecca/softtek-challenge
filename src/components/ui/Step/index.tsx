import { StepNumberIndicator } from "../StepNumberIndicator";
import { StepText } from "../StepText";

type Props = {
  activePage: boolean;
  stepNumber: number;
  name: string;
};

export function Step({ activePage, stepNumber, name }: Props) {
  return (
    <section className="step">
      <StepNumberIndicator
        active={activePage}
        stepNumber={stepNumber}
        className="step__indicator"
      />
      <StepText name={name} active={activePage} className="step__text" />
    </section>
  );
}
