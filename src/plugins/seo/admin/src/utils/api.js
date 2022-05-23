import { request } from "@strapi/helper-plugin";
import pluginId from "../pluginId";

const fetchContentTypes = async () => {
  try {
    const data = await request(`/${pluginId}/content-types`, { method: "GET" });
    return data;
  } catch (error) {
    return null;
  }
};

export { fetchContentTypes };