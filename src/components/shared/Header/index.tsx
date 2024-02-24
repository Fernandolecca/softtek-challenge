import { Logo } from "../../../assets/icons/Logo";
import { TelephoneIcon } from "../../../assets/icons/TelephoneIcon";

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Logo type="main" direction="vertical" />
          <section className="header__contact">
            <span className="header__contact__banner">
              compra por este medio!
            </span>
            <TelephoneIcon />
            <span className="header__contact__phone">(01) 411 6001</span>
          </section>
        </div>
      </div>
    </header>
  );
}
