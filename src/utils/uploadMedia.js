import axios from 'axios';
import { mediaServerUrl } from '../config';
import { toast } from 'react-toastify';

export const uploadMedia = (formData, type, dir) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`${mediaServerUrl}/uploads/${type}/${dir}`, formData, {
        withCredentials: false,
      });
      resolve(response.data);
    } catch (err) {
      toast.error(err.response.data.message);
      reject(err);
    }
  });
};
