const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos?albumId=1';

const API = {
    getPhotosList: () => {
        return fetch(PHOTOS_URL).then((res) => res.json());
    }
}
