import { Logo } from "../../../assets/icons/Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <Logo
            type="negative"
            direction="vertical"
            className="footer__logo-vertical"
          />
          <Logo
            type="negative"
            direction="horizontal"
            className="footer__logo-horizontal"
          />
          <hr />
          <span>&copy; 2023 RIMAC Seguros y Reaseguros.</span>
        </div>
      </div>
    </footer>
  );
}
