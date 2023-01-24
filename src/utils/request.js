import axios from "axios";

export const protocol = "https";

export const baseURL =
  "eu-west-2.aws.data.mongodb-api.com/app/application-0-utdoe/endpoint";

export const request = axios.create({
  baseURL: `${protocol}://${baseURL}`,
  headers: {
    "Content-type": "application/x-www-form-urlencoded",
  },
});
