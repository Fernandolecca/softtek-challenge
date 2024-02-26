import { PlanSelectionTabs } from "./PlanSelectionTabs";
import { Header } from "../../components/shared/Header";
import { Step } from "../../components/ui/Step";
import { BackArrow } from "../../assets/icons/BackArrow";
import { PersonalPlan } from "../../assets/icons/PersonalPlan";
import { ForOthersPlan } from "../../assets/icons/ForOthersPlan";
import { Link } from "react-router-dom";

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
      <div className="container">
        <div className="plan-selection grid">
          <section className="comeback-arrow">
            <Link to={"/"}>
              <BackArrow />
            </Link>
            <span>Volver</span>
          </section>

          <hgroup className="plan-selection__titles">
            <h1>Rocío ¿Para quién deseas cotizar?</h1>
            <h2>selecciona la opción que se ajuste más a tus necesidades.</h2>
          </hgroup>

          <PlanSelectionTabs
            tabs={[
              {
                id: 1,
                title: "Para mí",
                planDescription:
                  "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
                icon: <PersonalPlan />
              },
              {
                id: 2,
                title: "Para alquien más",
                planDescription:
                  "Realiza una cotización para uno de tus familiares o cualquier persona.",
                icon: <ForOthersPlan />
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
