import axios from 'axios';
import env from '@/config/env';

export const subscriberService = {
    subscribe: async (email: string) => {
        try {
            const response = await axios.post(`${env.apiUrl}/subscribers`, { email });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.message || 'Failed to subscribe');
            }
            throw new Error('An unexpected error occurred');
        }
    },
};
