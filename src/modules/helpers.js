
const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0,})

function formatAccountNumber (n) { return n.toString().match(/.{1,2}/g).join(' ') }

export { currencyFormatter, formatAccountNumber }