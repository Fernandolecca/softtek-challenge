import { useState, Fragment, useEffect } from "react";
import { PlanSelectionTab, Props as TabProps } from "./PlanSelectionTab";
import { PlansList } from "./PlansList";
import { PlanContainer } from "./PlanContainer";
import { Plan } from "../../models/plan";

type Props = {
  tabs: Omit<TabProps, "onSelectedPlan">[];
};

export function PlanSelectionTabs({ tabs }: Props) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const showTabPlans = (activeTab: number, plans: Plan[]) => {
    switch (activeTab) {
      case 1:
        return <PlansList plans={plans} withDiscount={false} />;
      case 2:
        return <PlansList plans={plans} withDiscount />;
      default:
        return null;
    }
  };

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  return (
    <Fragment>
      <section className="plan-selection__tabs">
        {tabs.map((tab) => (
          <PlanSelectionTab
            key={tab.id}
            id={tab.id}
            title={tab.title}
            planDescription={tab.planDescription}
            icon={tab.icon}
            onSelectedPlan={(activeTab: number) => setActiveTab(activeTab)}
          />
        ))}
      </section>

      <PlanContainer activeTab={activeTab}>
        {(activeTab: number, plans: Plan[]) => showTabPlans(activeTab, plans)}
      </PlanContainer>
    </Fragment>
  );
}
