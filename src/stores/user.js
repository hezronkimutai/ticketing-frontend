import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({ userData: null }),
    actions: {
        addCreatedUser(userData) {
            this.userData = userData;
        },
    },
});
