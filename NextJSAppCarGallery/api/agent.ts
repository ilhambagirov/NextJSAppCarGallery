import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import swal from "sweetalert";
import { Car, CarFormValues } from "../models/car";

const sleep = (delay: number) => {
    return new Promise(resolve => {
        setTimeout(resolve, delay)
    })
}
axios.defaults.baseURL = process.env.REACT_APP_API_URL

axios.interceptors.response.use(async response => {
    if (process.env.NODE_ENV === 'development') await sleep(200);
    return response;
},
    (error: AxiosError) => {
        const { data, status } = error.response!
        switch (status) {
            case 400:
                console.log(data)
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
                break;
            case 500:
                // dark.commonStore.setServerError(data)
                break;
            default:
                break;
        }
        return Promise.reject(error)
    }
)


const responseBody = <T>(response: AxiosResponse<T>) => response.data


const request = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(id: string, body: {}) => axios.put<T>(id, body).then(responseBody),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}
const Cars = {
    getAll: () => request.get<Car[]>(`/Car/GetAllCars`),
    get: (id: number) => request.get<Car>(`/Car/GetCar/${id}`),
    create: (post: CarFormValues) => axios.post<number>(`/Car/createCar`, post).then(responseBody),
    // delete: (id: number) => request.delete<void>(`/home/posts/${id}`),
}

const agent = {
    Cars,
}
export default agent