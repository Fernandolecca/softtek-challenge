import { Header } from "../../components/shared/Header";
import { HeroBanner } from "./HeroBanner";

export function Home() {
  return (
    <div className="background">
      <Header />
      <div className="container">
        <HeroBanner />
      </div>
    </div>
  );
}
