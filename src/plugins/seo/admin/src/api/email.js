import { request } from "@strapi/helper-plugin";

const emailRequests = {
  getAllEmails: async () => {
    return await request("/seo/find", {
      method: "GET",
    });
  },

};

export default emailRequests;
