export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const ENDPOINTS = {
  getBSchoolsByZone: (zone: string) => `/mat-b-school/zone/${zone}`,
  getPbtCitiesByZone: (zone: string) => `/mat-test-city-pbt/zone/${zone}`,
  getPbtCities: () => `/mat-test-city-pbt`,
  getCbtCitiesByZone: (zone: string) => `/mat-test-city-cbt/zone/${zone}`,
  getCbtCities: () => `/mat-test-city-cbt`,
};
