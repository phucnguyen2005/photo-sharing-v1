import models from "../modelData/models";

/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url      The URL to issue the GET request.
 * @returns {Promise}       A Promise that resolves to the JSON data.
 */
async function fetchModel(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (url === "/user/list") {
          resolve({ data: models.userListModel() });
        } else if (url.startsWith("/user/")) {
          const id = url.split("/")[2];
          const user = models.userModel(id);
          if (user) resolve({ data: user });
          else reject(new Error("User not found"));
        } else if (url.startsWith("/photosOfUser/")) {
          const id = url.split("/")[2];
          const photos = models.photoOfUserModel(id);
          if (photos) resolve({ data: photos });
          else reject(new Error("Photos not found"));
        } else {
          reject(new Error(`Báo lỗi mạng vì đường dẫn ${url} không tồn tại`));
        }
      } catch (error) {
        reject(error);
      }
    }, 100);
  });
}

export default fetchModel;
