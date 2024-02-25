import { Header } from "../../components/shared/Header";
import { Step } from "../../components/ui/Step";

export function Plans() {
  return (
    <div className="background">
      <Header />
      <div className="steps">
        <div className="container">
          <div className="steps__content">
            <Step activePage name="Planes y cobertura" stepNumber={1} />
            <hr className="step__separator" />
            <Step activePage={false} name="Resumen" stepNumber={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
