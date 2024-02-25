export type UserDocumentTypes = "DNI" | "RUC" | "PASAPORTE" | "CARNET EXT";

export type UserInfo = {
  documentType: UserDocumentTypes;
  documentNumber: string;
  phone: string;
};

export type User = UserInfo & {
  name: string;
  lastName: string;
  birthday: string;
};
