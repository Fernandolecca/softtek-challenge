import { Header } from "../../components/shared/Header";
import { HeroBanner } from "./HeroBanner";
import { Footer } from "../../components/shared/Footer";

export function Home() {
  return (
    <div className="background">
      <Header />
      <div className="container">
        <HeroBanner />
      </div>
      <Footer />
    </div>
  );
}
