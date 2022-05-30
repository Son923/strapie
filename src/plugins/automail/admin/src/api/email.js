import { request } from "@strapi/helper-plugin";

const emailRequests = {
  getAllEmails: async () => {
    return await request("/email/find", {
      method: "GET",
    });
  },

  addEmail: async (data) => {
    return await request(`/email/create`, {
      method: "POST",

      body: { data: data },
    });
  },

  toggleEmail: async (id) => {
    return await request(`/email/toggle/${id}`, {
      method: "PUT",
    });
  },

  editEmail: async (id, data) => {
    return await request(`/email/update/${id}`, {
      method: "PUT",

      body: { data: data },
    });
  },

  deleteEmail: async (id) => {
    return await request(`/email/delete/${id}`, {
      method: "DELETE",
    });
  },
};

export default emailRequests;