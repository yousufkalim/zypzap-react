import axios from 'axios';
import { mediaServerUrl } from '../config';
import { toast } from 'react-toastify';

export const uploadPhoto = (formData, dir) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`${mediaServerUrl}/uploads/photos/${dir}`, formData, {
        withCredentials: false,
      });
      resolve(response.data);
    } catch (err) {
      toast.error(err.response.data.message);
      reject(err);
    }
  });
};

export const uploadVideoAsThumbnail = (formData, dir) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`${mediaServerUrl}/uploads/videos/${dir}`, formData, {
        withCredentials: false,
      });
      resolve(response.data);
    } catch (err) {
      toast.error(err.response.data.message);
      reject(err);
    }
  });
};

export const uploadVideo = async (file, creator, setVideoName, setOpens, setmbPerSecond, setTimeUploadRemaining, setProgress) => {
  if (!file) return;
  //   controller = new AbortController();

  return new Promise(async (resolve, reject) => {
    setVideoName(file.name);
    setOpens(true);

    const formData = new FormData();
    formData.append('videos', file);

    // file upload speed code
    let bytesTransferred = null;
    let bytesTransferredTime = null; //new Date().getTime();
    let totalBytesTransferred = 0;
    let updateDurationThreshold = 2000;
    let speed = 0;

    try {
      window.controller.signal.addEventListener('abort', () => {
        return reject();
      });

      const response = await axios.post(`${mediaServerUrl}/uploads/videos/${creator}`, formData, {
        withCredentials: false,
        signal: controller.signal,
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          if (bytesTransferredTime == null) {
            bytesTransferred = loaded;
            bytesTransferredTime = new Date().getTime();
            totalBytesTransferred += loaded;
            speed = 0;
          } else {
            let now = new Date().getTime();
            let _duration = now - bytesTransferredTime;
            if (_duration > updateDurationThreshold) {
              let bytesPerSecond = (loaded - bytesTransferred) / updateDurationThreshold;

              bytesTransferred = loaded;

              bytesTransferredTime = now;
              let newbytesPerSecond = bytesPerSecond / 1024;
              setmbPerSecond(newbytesPerSecond.toFixed(3));
              let remTime = (((total - loaded) / bytesPerSecond) * 2) / (updateDurationThreshold - 1000);
              totalBytesTransferred += bytesTransferred;
              remTime = remTime.toFixed(0);
              if (remTime <= 60) remTime = `${remTime} sec left`;
              if (remTime > 60 && remTime < 3600) {
                remTime = (remTime / 60).toFixed(2);
                remTime = `${remTime} min left`;
              }

              if (remTime > 3600) {
                remTime = (remTime / 3600).toFixed(2);
                remTime = `${remTime} hour left`;
              }
              setTimeUploadRemaining(remTime);
            }
          }
          const progress = Math.round((loaded / total) * 100);
          setProgress(progress);
        },
      });

      const url = response.data.url;
      resolve(url);
    } catch (err) {
      toast.error('Error uploading file. Pleaese try again');
      reject();
    }
  });
};
