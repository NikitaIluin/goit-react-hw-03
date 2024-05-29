import * as Yup from "yup";

export const ValidSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short name!")
    .max(50, "Too long name!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short number!")
    .max(50, "Too long name!")
    .required("Required"),
});

export const initialValues = { name: "", number: "" };

export const contactList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];