import { ICow } from "./cow.interface";
import { CowData } from "./cow.model";

const createCow = async (payload: ICow): Promise<ICow> => {
    const result = await CowData.create(payload)
    return result
}

export const CowService = {
    createCow
}