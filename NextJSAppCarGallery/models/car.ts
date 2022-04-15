import { CarType } from "./carType";

export interface Car {
    id: number;
    brand: string,
    model: any,
    year: Date,
    km: string,
    color: string,
    imageUrl: string,
    carType: CarType,
    createdDate: Date,
}

export interface CarFormValues {
    brand: string;
    model: string;
    year: string;
    km: string;
    color: string;
    imageUrl: string;
    carTypeId: number;
    // constructor(car?: CarFormValues) {
    //     if (car) {
    //         this.brand = car?.brand
    //         this.model = car?.model
    //         this.year = car?.year
    //         this.km = car?.km
    //         this.color = car?.color
    //         this.imageUrl = car?.imageUrl
    //         this.carTypeId = car?.carTypeId
    //     }
    // }
}