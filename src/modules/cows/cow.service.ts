import { SortOrder } from "mongoose";
import { IPaginationOptions } from "../../interface/pagination";
import { ICow, TCowFilters } from "./cow.interface";
import { CowData } from "./cow.model";
import { cowSearchableFields } from "./cow.constant";
import { IGenericErrorResponse, IGenericResponse } from "../../interface/common";
import { paginationHelper } from "../../helpers/PaginationHelpers";

const createCow = async (payload: ICow): Promise<ICow> => {
    const result = await CowData.create(payload)
    return result
}

const getAllCows = async (filters: TCowFilters, paginationOptions: IPaginationOptions): Promise<IGenericResponse<ICow[]>> => {
    const { searchTerm, ...filtersData } = filters
    const { page, limit, sortBy, sortOrder } = paginationHelper.calculatePagination(paginationOptions)

    const andConditions = []

    if (searchTerm) {
        andConditions.push({
            $or: cowSearchableFields.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: 'i',
                },
            })),
        })
    }

    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        })
    }

    const whereConditions = andConditions.length ? { $and: andConditions } : {}

    const sortConditions: { [key: string]: SortOrder } = {}
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder
    }

    const skip = (page - 1) * limit
    const result = await CowData.find(whereConditions)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit)

    const total = await CowData.countDocuments(whereConditions)

    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    }
}

const getSingleCow = async (id: string): Promise<ICow | null> => {
    const result = await CowData.findById(id).populate('seller')
    return result
}
const updateCow = async (id: string, payload: Partial<ICow>): Promise<ICow | null> => {
    const result = await CowData.findOneAndUpdate({ _id: id }, payload, { new: true })
    return result
}
const deleteCow = async (id: string): Promise<ICow | null> => {
    const result = await CowData.findByIdAndDelete(id)
    return result
}
export const CowService = {
    createCow,
    getAllCows,
    getSingleCow,
    updateCow,
    deleteCow
}