import { IUser } from "./IUser"

export interface IProjects {
    _id: string,
    _ownerId: string,
    projectName: string,
    contractor: string,
    imageUrl1: string,
    imageUrl2: string,
    imageUrl3: string,
    release: number,
    location: string,
    description: string,
    _createdOn: number
}
