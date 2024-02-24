import { BannerForm } from "./BannerForm";
import backgroundImg from "../../assets/images/background-family.png";

export function HeroBanner() {
  return (
    <main className="hero-banner grid">
      <section className="hero-banner__bg">
        <img
          src={backgroundImg}
          alt="home page family picture"
          className="hero-banner__bg__img"
        />
      </section>

      <section className="hero-banner__cta">
        <span className="hero-banner__cta__label">Seguro Salud Flexible</span>
        <h1 className="hero-banner__cta__title">Creado para ti y tu familia</h1>
      </section>

      <section className="hero-banner__form">
        <BannerForm />
      </section>
    </main>
  );
}
