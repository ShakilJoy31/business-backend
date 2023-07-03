"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationHelper = void 0;
const calculatePagination = (options) => {
    const page = Number(options.page || 1);
    const limit = Number(options.limit || 10);
    const skip = (page - 1) * limit;
    // For the sortby and sortOrder
    const sortBy = options.sortBy || 'createdAt';
    const sortOrder = options.sortOrder || 'asc';
    return {
        page,
        limit,
        skip,
        sortBy,
        sortOrder
    };
};
exports.paginationHelper = {
    calculatePagination
};
