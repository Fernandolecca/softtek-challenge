import { Button } from "../../components/shared/Button";

export function BannerForm() {
  return (
    <form className="banner-form">
      <p className="banner-form__description">
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>

      <div className="banner-form__dropdown">
        <select name="document-type">
          <option value="DNI">DNI</option>
          <option value="RUC">RUC</option>
          <option value="PASAPORTE">PASAPORTE</option>
          <option value="CARNET_EXT">CARNET EXT</option>
        </select>
        <input
          type="text"
          name="document-number"
          placeholder="Nro. de documento"
        />
      </div>

      <input
        type="text"
        name="phone"
        className="banner-form__phone"
        placeholder="Celular"
      />

      <div className="banner-form__policies">
        <label htmlFor="privacy-policy">
          <input type="checkbox" name="privacy-policy" id="privacy-policy" />
          <span>Acepto la Política de Privacidad</span>
        </label>
        <label htmlFor="commercial-policy">
          <input
            type="checkbox"
            name="commercial-policy"
            id="commercial-policy"
          />
          <span>Acepto la Política Comunicaciones Comerciales</span>
        </label>
      </div>

      <a href="#" className="banner-form__terms">
        Aplican Términos y Condiciones.
      </a>

      <Button type="submit" color="secondary">
        Cotiza aquí
      </Button>
    </form>
  );
}
