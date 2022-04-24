import axios from 'axios';

const BASE_URL = '/api/softhouseFunction';

export const getContent = async () => await axios.get(BASE_URL);

export const addContent = async (document) => await axios.post(BASE_URL, document);