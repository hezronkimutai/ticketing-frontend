import { defineStore } from 'pinia';

export const useEventStore = defineStore('event', {
    state: () => ({ eventData: null }),
    actions: {
        addCreatedEvent(eventData) {
            this.eventData = eventData;
        },
    },
});
