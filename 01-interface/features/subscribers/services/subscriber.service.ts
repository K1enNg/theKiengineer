import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const subscriberService = {
    subscribe: async (email: string) => {
        try {
            const response = await axios.post(`${API_URL}/subscribers`, { email });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.message || 'Failed to subscribe');
            }
            throw new Error('An unexpected error occurred');
        }
    },
};
