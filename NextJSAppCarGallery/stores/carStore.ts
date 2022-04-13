import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Car, CarFormValues } from "../models/car";

export default class CarStore {
    carRegistry = new Map<number, Car>();
    loading = false
    constructor() {
        makeAutoObservable(this)
    }

    loadCars = async (cars: Car[]) => {
        try {
            console.log(cars);
            cars.forEach(a => {
                this.setActivity(a)
            })
        } catch (error) {
            console.log(error)
        }
    }

    get groupedCars() {
        var result = Array.from(this.carRegistry, ([id, value]) => ({ id, value }))
            .sort(function (a, b) {
                var dateA = new Date(a.value.createdDate).getTime();
                var dateB = new Date(b.value.createdDate).getTime();
                return dateA < dateB ? 1 : -1
            });
        return result
    }
    // deletePost = async (id: number) => {
    //     try {
    //         const post = await agent.Posts.delete(id);
    //         runInAction(() => {
    //             this.postRegistry.delete(id)
    //         })
    //         var profile = dark.profileStore.profile as User
    //         profile.posts.length--
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    private getPost = (id: number) => {
        return this.carRegistry.get(id)
    }

    setActivity = (a: Car) => {
        this.carRegistry.set(a.id, a);
    }
}