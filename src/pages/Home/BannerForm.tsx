import React, { useState } from "react";
import { Button } from "../../components/shared/Button";
import { useNavigate } from "react-router-dom";
import { UserInfo } from "../../models/user";

export function BannerForm() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    documentType: "DNI",
    documentNumber: "",
    phone: ""
  });
  const [acceptedPrivacyPolicy, setPrivacyPolicy] = useState(false);
  const [acceptedCommercialPolicy, setCommercialPolicy] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userInfoIsFilled = Object.values(userInfo).every(Boolean);

    if (userInfoIsFilled && acceptedPrivacyPolicy && acceptedCommercialPolicy) {
      navigate("/plans");
    }
  };

  const handleUserInfoChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  return (
    <form className="banner-form" onSubmit={handleSubmit}>
      <p className="banner-form__description">
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>

      <div className="banner-form__dropdown">
        <select
          name="documentType"
          value={userInfo.documentType}
          onChange={handleUserInfoChange}
        >
          <option value="DNI">DNI</option>
          <option value="RUC">RUC</option>
          <option value="PASAPORTE">PASAPORTE</option>
          <option value="CARNET_EXT">CARNET EXT</option>
        </select>

        <input
          type="text"
          name="documentNumber"
          value={userInfo.documentNumber}
          onChange={handleUserInfoChange}
          placeholder="Nro. de documento"
        />
      </div>

      <input
        type="text"
        name="phone"
        value={userInfo.phone}
        onChange={handleUserInfoChange}
        className="banner-form__phone"
        placeholder="Celular"
      />

      <div className="banner-form__policies">
        <label htmlFor="privacy-policy">
          <input
            type="checkbox"
            name="acceptedPrivacyPolicy"
            checked={acceptedPrivacyPolicy}
            onChange={() => setPrivacyPolicy(!acceptedPrivacyPolicy)}
            id="privacy-policy"
          />
          <span>Acepto la Política de Privacidad</span>
        </label>
        <label htmlFor="commercial-policy">
          <input
            type="checkbox"
            name="acceptedCommercialPolicy"
            checked={acceptedCommercialPolicy}
            onChange={() => setCommercialPolicy(!acceptedCommercialPolicy)}
            id="commercial-policy"
          />
          <span>Acepto la Política Comunicaciones Comerciales</span>
        </label>
      </div>

      <a href="#" className="banner-form__terms">
        Aplican Términos y Condiciones.
      </a>

      <Button type="submit" color="secondary" className="banner-form__btn">
        Cotiza aquí
      </Button>
    </form>
  );
}
