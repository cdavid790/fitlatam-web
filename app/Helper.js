// En App.js — helper de tipo de cambio
const CURRENCY_SYMBOLS = {
  US:'USD', GB:'GBP', EU:'EUR', CA:'CAD',
  AU:'AUD', JP:'JPY', BR:'BRL', IN:'INR',
};

const PLAN_USD = { starter: 6, pro: 12, elite: 17 };

async function getLocalPrice(planId) {
  try {
    const country = Localization.region;
    const currency = CURRENCY_SYMBOLS[country] || 'USD';

    // Consulta tipo de cambio gratis
    const res = await fetch(
      `https://api.frankfurter.app/latest?from=USD&to=${currency}`
    );
    const data = await res.json();
    const rate = data.rates[currency] || 1;
    const localPrice = (PLAN_USD[planId] * rate).toFixed(2);

    return `$${PLAN_USD[planId]} USD (~${localPrice} ${currency})`;
  } catch {
    return `$${PLAN_USD[planId]} USD`;
  }
}