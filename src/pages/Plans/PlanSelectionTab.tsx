import { ReactNode, useState } from "react";

export type Props = {
  id: number;
  title: string;
  planDescription: string;
  icon: ReactNode;
  onSelectedPlan: (activeTab: number) => void;
};

export function PlanSelectionTab({
  id,
  title,
  planDescription,
  icon,
  onSelectedPlan
}: Props) {
  const [categoryChecked, setCategoryChecked] = useState(false);

  if (categoryChecked) {
    onSelectedPlan(id);
  }

  return (
    <div className="plan-selection-tab">
      <input
        type="checkbox"
        name="selectedPlanCategory"
        className="plan-selection-tab__check"
        checked={categoryChecked}
        onChange={() => setCategoryChecked(!categoryChecked)}
      />
      {icon}
      <h1>{title}</h1>
      <p>{planDescription}</p>
    </div>
  );
}
