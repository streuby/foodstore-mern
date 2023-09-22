export const formatCurrency = (amount, currency, currencySymbol, locale) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency, // Replace 'USD' with the appropriate currency code
  });

  // Extract the currency symbol from the formatted string
  const currencyCode = formatter
    .formatToParts(0)
    .find((part) => part.type === "currency").value;

  // Replace the currency code with the currency symbol in the formatted string
  const formattedAmount = formatter
    .format(amount)
    .replace(currencyCode, currencySymbol);
  return formattedAmount;
};

export const userLocale = navigator.language || navigator.userLanguage;
