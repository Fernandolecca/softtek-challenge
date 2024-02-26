import { Plan } from "../models/plan";

export async function fetchPlans(): Promise<Plan[]> {
  const response = await fetch(
    "https://rimac-front-end-challenge.netlify.app/api/plans.json"
  );
  const { list } = await response.json();

  return list;
}
