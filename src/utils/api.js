// src/utils/api.js

const apiKey = import.meta.env.VITE_API_KEY;
console.log("Loaded API KEY:", apiKey);

const fdaBaseUrl = "https://api.fda.gov/drug/label.json";

// ------------------ HELPER ------------------
export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

// ------------------ FDA ENDPOINT ------------------
export const getDrugs = (searchParams) => {
  return fetch(
    `${fdaBaseUrl}?api_key=${apiKey}&search=${searchParams}&limit=1`,
  ).then(checkResponse);
};

// ------------------ DEFAULT EXPORT ------------------
const api = {
  getDrugs,
  checkResponse,
};

export default api;
