import { ICow } from "./cow.interface";
import { CowData } from "./cow.model";

const createCow = async (payload: ICow): Promise<ICow> => {
    const result = await CowData.create(payload)
    return result
}

const getSingleCow = async (id: string): Promise<ICow | null> => {
    const result = await CowData.findById(id).populate('seller')
    return result
}
export const CowService = {
    createCow,
    getSingleCow
}