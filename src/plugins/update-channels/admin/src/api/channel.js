import { request, auth } from '@strapi/helper-plugin';

const token = auth.getToken();

const channelRequest = {
    getAllChannels: async () => {
        return await request('/content-manager/collection-types/api::channel.channel', {
            method: "GET",
        });
    }
};

export default channelRequest;