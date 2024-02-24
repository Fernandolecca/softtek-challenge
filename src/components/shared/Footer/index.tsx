import { Logo } from "../../../assets/icons/Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <Logo type="negative" />
          <span>&copy; 2023 RIMAC Seguros y Reaseguros.</span>
        </div>
      </div>
    </footer>
  );
}
