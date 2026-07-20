import { BASE_URL, ENDPOINTS } from "../apiFactory/apiFactory";

export interface BSchool {
  id: number;
  zone: string;
  mi_code: string;
  institute_name: string;
  website: string;
  city: string;
  status: boolean;
  created_at: string;
  updated_at: string;
}

export interface BSchoolApiResponse {
  success: boolean;
  message: string;
  data: BSchool[];
}


export const getBSchoolsByZone = async (zone: string): Promise<BSchoolApiResponse> => {
  try {
    const formattedZone = zone.charAt(0).toUpperCase() + zone.slice(1).toLowerCase();
    const url = `${BASE_URL}${ENDPOINTS.getBSchoolsByZone(formattedZone)}`;

    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "X-CSRF-TOKEN": "",
        'X-API-KEY': 'vin001'
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: BSchoolApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error(`Error in getBSchoolsByZone for zone ${zone}:`, error);
    throw error;
  }
};

export interface TestCity {
  id: number;
  city_name?: string;
  city?: string;
  zone: string;
  status: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface TestCityApiResponse {
  success: boolean;
  message: string;
  data: TestCity[];
}

export const formatZoneName = (zone: string): string => {
  let cleanZone = zone.trim();
  if (cleanZone.toLowerCase().endsWith("zone")) {
    cleanZone = cleanZone.slice(0, -4).trim();
  }
  if (!cleanZone) return "";
  const titleCase = cleanZone.charAt(0).toUpperCase() + cleanZone.slice(1).toLowerCase();
  return `${titleCase} Zone`;
};


export const getPbtCitiesByZone = async (zone: string): Promise<TestCityApiResponse> => {
  try {
    const formattedZone = formatZoneName(zone);
    const url = `${BASE_URL}${ENDPOINTS.getPbtCitiesByZone(encodeURIComponent(formattedZone))}`;

    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "X-CSRF-TOKEN": "",
        "X-API-KEY": "vin001"
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: TestCityApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error(`Error in getPbtCitiesByZone for zone ${zone}:`, error);
    throw error;
  }
};


export const getCbtCitiesByZone = async (zone: string): Promise<TestCityApiResponse> => {
  try {
    const formattedZone = formatZoneName(zone);
    const url = `${BASE_URL}${ENDPOINTS.getCbtCitiesByZone(encodeURIComponent(formattedZone))}`;

    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "X-CSRF-TOKEN": "",
        "X-API-KEY": "vin001"
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: TestCityApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error(`Error in getCbtCitiesByZone for zone ${zone}:`, error);
    throw error;
  }
};


export const getPbtCities = async (): Promise<TestCityApiResponse> => {
  try {
    const url = `${BASE_URL}${ENDPOINTS.getPbtCities()}`;

    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "X-CSRF-TOKEN": "",
        "X-API-KEY": "vin001"
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: TestCityApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error(`Error in getPbtCities:`, error);
    throw error;
  }
};


export const getCbtCities = async (): Promise<TestCityApiResponse> => {
  try {
    const url = `${BASE_URL}${ENDPOINTS.getCbtCities()}`;

    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "X-CSRF-TOKEN": "",
        "X-API-KEY": "vin001"
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: TestCityApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error(`Error in getCbtCities:`, error);
    throw error;
  }
};

