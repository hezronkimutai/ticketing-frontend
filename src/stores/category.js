import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('category', {
    state: () => ({ categoryData: null }),
    actions: {
        addCreatedCategory(categoryData) {
            this.categoryData = categoryData;
        },
    },
});
