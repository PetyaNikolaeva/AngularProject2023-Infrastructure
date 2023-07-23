import { IUser } from "./IUser"

export interface IProjects {
    _ownerId: string,
    projectName: string,
    contractor: string,
    imageUrl: string,
    release: number,
    location: string,
    description: string,
    companyInfo: string,
    _createdOn: number
}
