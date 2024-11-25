import { defineStore } from 'pinia';

export const useTicketStore = defineStore('ticket', {
    state: () => ({ ticketData: null }),
    actions: {
        addCreatedTicket(ticketData) {
            this.ticketData = ticketData;
        },
    },
});
