import { request } from "@strapi/helper-plugin";

const mailRequests = {
    getAllMails: async () => {
      return await request("/automail/find", {
        method: "GET",
      });
    },
  
  };
  
  export default mailRequests;