import axios from 'axios';
export const foodApi = axios.create({
  // baseURL:  'http://localhost:3001/'
  baseURL: 'integratedproyectback-end-production.up.railway.app'
})

/*
http://localhost:3001/recipes/:id
http://localhost:3001/diets
*/