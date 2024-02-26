import { Fragment, ReactNode } from "react";
import { Button } from "../../components/shared/Button";
import { Plan } from "../../models/plan";

type Props = Plan & {
  withDiscount: boolean;
  icon: ReactNode;
};

export function PlanCard({
  name,
  price,
  description,
  withDiscount,
  icon
}: Props) {
  return (
    <div className="plan">
      <div className="plan__text-icon">
        <div className="plan__text-content">
          <h1>{name}</h1>
          <h2>Costo del plan</h2>
          {withDiscount ? (
            <Fragment>
              <span className="plan__previous-price"> &#36;{price} antes</span>
              <span className="plan__price">
                &#36;{price - price * 0.05} al mes
              </span>
            </Fragment>
          ) : (
            <span className="plan__price">&#36;{price} al mes</span>
          )}
        </div>
        {icon}
      </div>
      <hr className="plan__separator" />
      <ul className="plan__description">
        {description.map((description) => (
          <li key={description}>{description}</li>
        ))}
      </ul>
      <Button color="primary" className="plan__select-btn">
        Seleccionar Plan
      </Button>
    </div>
  );
}
