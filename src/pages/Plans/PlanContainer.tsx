import { ReactNode, useEffect, useState } from "react";
import { Plan } from "../../models/plan";
import { fetchPlans } from "../../services/plans";

type Props = {
  activeTab: number;
  children: (activeTab: number, plans: Plan[]) => ReactNode;
};

export function PlanContainer({ children, activeTab }: Props) {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    fetchPlans()
      .then((plans) => plans.filter((plan) => plan.age >= 60))
      .then(setPlans);
  }, []);

  return children(activeTab, plans);
}
