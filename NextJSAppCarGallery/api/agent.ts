import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import swal from "sweetalert";
import { Car, CarFormValues } from "../models/car";
import { CarType } from "../models/carType";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:6680/api";

axios.interceptors.response.use(
  async (response) => {
    // if (process.env.NODE_ENV === 'development') await sleep(0);
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response!;
    switch (status) {
      case 400:
        console.log(data);
        swal(data.errors[Object.keys(data.errors)[0]][0], {
          icon: "error",
        });
        // dark.userStore.errorData = data.errors[Object.keys(data.errors)[0]][0]
        break;
      case 401:
        swal("Your are not logged in!", {
          icon: "error",
        });
        break;
      case 404:
        // dark.commonStore.setServerError(data)
        swal("Error ala", {
          icon: "error",
        });
        break;
      case 500:
        // dark.commonStore.setServerError(data)
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(id: string, body: {}) => axios.put<T>(id, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};
const Cars = {
  getAll: () => request.get<Car[]>(`/Car/GetAllCars`),
  get: (id: number) => request.get<Car>(`/Car/GetCar/${id}`),
  create: (post: CarFormValues) => request.post<number>(`/Car/createCar`, post),
  edit: (id: number, post: CarFormValues) =>
    request.put<void>(`/Car/updateCar/${id}`, post),
  delete: (id: number) => request.delete<void>(`/Car/deleteCar/${id}`),
  search: (word: string) =>
    request.get<Car[] | null>(`/Car/searchCars/${word}`),
};
const CarTypes = {
  getAll: () => request.get<CarType[]>(`CarType/GetAllCarTypes`),
};

const agent = {
  Cars,
  CarTypes,
};
export default agent;
