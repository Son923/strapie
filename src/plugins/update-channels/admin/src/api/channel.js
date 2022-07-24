import { request } from '@strapi/helper-plugin';

const channelRequest = {
    getAllChannels: async () => {
        return await request('/channel/find', {
            method: GET,
        });
    }
};

export default channelRequest;