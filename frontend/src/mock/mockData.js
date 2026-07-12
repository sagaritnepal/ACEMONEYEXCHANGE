// Mock data for ACE Money Exchange clone

export const converterData = {
  from: { code: 'USD', flag: 'US' },
  to: { code: 'NPR', flag: 'NP' },
  sendAmount: 1000,
  receiveAmount: 133450,
  marketRate: '1 USD = 133.45 NPR',
  processingFee: 'Free / 0.00 NPR'
};

export const tickerRates = [
  { pair: 'USD/NPR', buy: 133.45, sell: 134.10, up: true },
  { pair: 'EUR/NPR', buy: 144.20, sell: 145.05, up: true },
  { pair: 'GBP/NPR', buy: 168.10, sell: 169.25, up: false },
  { pair: 'AUD/NPR', buy: 88.40, sell: 89.15, up: true },
  { pair: 'INR/NPR', buy: 1.60, sell: 1.61, up: true },
];

export const exchangeRates = [
  { flag: 'https://flagcdn.com/w40/us.png', currency: 'US Dollar', code: 'USD', unit: 1, buying: 133.45, selling: 134.10, change: 0.15, up: true },
  { flag: 'https://flagcdn.com/w40/eu.png', currency: 'Euro', code: 'EUR', unit: 1, buying: 144.20, selling: 145.05, change: 0.32, up: true },
  { flag: 'https://flagcdn.com/w40/gb.png', currency: 'British Pound', code: 'GBP', unit: 1, buying: 168.10, selling: 169.25, change: 0.18, up: false },
  { flag: 'https://flagcdn.com/w40/au.png', currency: 'Australian Dollar', code: 'AUD', unit: 1, buying: 88.48, selling: 89.15, change: 0.22, up: true },
  { flag: 'https://flagcdn.com/w40/ca.png', currency: 'Canadian Dollar', code: 'CAD', unit: 1, buying: 98.30, selling: 99.10, change: 0.08, up: true },
  { flag: 'https://flagcdn.com/w40/ch.png', currency: 'Swiss Franc', code: 'CHF', unit: 1, buying: 149.55, selling: 150.40, change: 0.12, up: false },
  { flag: 'https://flagcdn.com/w40/jp.png', currency: 'Japanese Yen', code: 'JPY', unit: 10, buying: 9.12, selling: 9.28, change: 0.05, up: true },
  { flag: 'https://flagcdn.com/w40/cn.png', currency: 'Chinese Yuan', code: 'CNY', unit: 1, buying: 18.35, selling: 18.90, change: 0.10, up: true },
  { flag: 'https://flagcdn.com/w40/in.png', currency: 'Indian Rupee', code: 'INR', unit: 100, buying: 160.00, selling: 160.50, change: 0.02, up: true },
  { flag: 'https://flagcdn.com/w40/ae.png', currency: 'UAE Dirham', code: 'AED', unit: 1, buying: 36.34, selling: 36.90, change: 0.08, up: false },
  { flag: 'https://flagcdn.com/w40/sa.png', currency: 'Saudi Riyal', code: 'SAR', unit: 1, buying: 35.58, selling: 36.10, change: 0.05, up: true },
  { flag: 'https://flagcdn.com/w40/qa.png', currency: 'Qatari Riyal', code: 'QAR', unit: 1, buying: 36.65, selling: 37.20, change: 0.11, up: true },
  { flag: 'https://flagcdn.com/w40/my.png', currency: 'Malaysian Ringgit', code: 'MYR', unit: 1, buying: 30.85, selling: 31.40, change: 0.06, up: false },
  { flag: 'https://flagcdn.com/w40/kr.png', currency: 'South Korean Won', code: 'KRW', unit: 100, buying: 9.72, selling: 9.95, change: 0.03, up: true },
  { flag: 'https://flagcdn.com/w40/sg.png', currency: 'Singapore Dollar', code: 'SGD', unit: 1, buying: 99.10, selling: 100.20, change: 0.14, up: true },
  { flag: 'https://flagcdn.com/w40/th.png', currency: 'Thai Baht', code: 'THB', unit: 1, buying: 3.85, selling: 3.95, change: 0.02, up: false },
];

export const services = [
  {
    icon: 'Wallet',
    title: 'Foreign Currency Exchange',
    description: 'Buy and sell over 30 major global currencies at industry-leading rates with zero hidden commission fees.'
  },
  {
    icon: 'Send',
    title: 'Wire Transfer',
    description: 'Fast and secure international money transfers through SWIFT and global remittance networks.'
  },
  {
    icon: 'Plane',
    title: 'Travel Money',
    description: 'Secure your travel currency ahead of time. Pre-order online and pick up at our Thamel branch.'
  }
];

export const stats = [
  { value: '10+', label: 'YEARS OF SERVICE' },
  { value: '50K+', label: 'HAPPY CUSTOMERS' },
  { value: '30+', label: 'GLOBAL CURRENCIES' }
];

export const currencyOptions = [
  { code: 'USD', flag: 'https://flagcdn.com/w40/us.png' },
  { code: 'EUR', flag: 'https://flagcdn.com/w40/eu.png' },
  { code: 'GBP', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'AUD', flag: 'https://flagcdn.com/w40/au.png' },
  { code: 'CAD', flag: 'https://flagcdn.com/w40/ca.png' },
  { code: 'INR', flag: 'https://flagcdn.com/w40/in.png' },
  { code: 'NPR', flag: 'https://flagcdn.com/w40/np.png' },
];

export const rateMap = {
  USD: 133.45,
  EUR: 144.20,
  GBP: 168.10,
  AUD: 88.48,
  CAD: 98.30,
  INR: 1.60,
  NPR: 1
};
