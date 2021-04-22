//const baseUrl = process.env.API || "https://flipkart-rest-server.herokuapp.com";
const baseUrl = "http://localhost:5000";

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
