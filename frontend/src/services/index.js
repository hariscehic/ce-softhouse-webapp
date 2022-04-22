import axios from 'axios';

const BASE_URL = 'https://nice-sky-0a504c203.1.azurestaticapps.net/api/softhouseFunction';

export const getContent = async () => await axios.get(BASE_URL);

export const addContent = async (document) => await axios.post(BASE_URL, document);