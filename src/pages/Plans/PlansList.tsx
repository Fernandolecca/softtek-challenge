import { PlanCard } from "./PlanCard";
import { Plan } from "../../models/plan";
import { HomePlan } from "../../assets/icons/HomePlan";
import { HomePlanPlusClinic } from "../../assets/icons/HomePlanPlusClinic";
import { ReactNode } from "react";

type Props = {
  plans: Plan[];
  withDiscount: boolean;
};

export function PlansList({ withDiscount, plans }: Props) {
  const mapPlanToIcon: Record<string, ReactNode> = {
    "Plan en Casa": <HomePlan />,
    "Plan en Casa y Clínica": <HomePlanPlusClinic />,
    "Plan en Casa + Chequeo ": <HomePlan />
  };

  return (
    <section className="plan-selection__planlist">
      {plans.map((plan) => (
        <PlanCard
          {...plan}
          withDiscount={withDiscount}
          icon={mapPlanToIcon[plan.name]}
        />
      ))}
    </section>
  );
}
