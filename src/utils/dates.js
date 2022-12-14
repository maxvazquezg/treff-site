const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
export const setDateString = (dateString) => {
const date = new Date(dateString);
  if (date) {
    return (
      date.getDate() +
      " de " +
      meses[date.getMonth()] +
      " de " +
      date.getUTCFullYear()
    );
  }
};
