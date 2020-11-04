import {PHOTOS_URL, QUERY_PARAMETER_TEMPLATE} from '../config';

export default class AlbumFotosCollection{
    constructor(){
        console.log('collection created');

        this.photosList = [];
    }

    getPhotosList(id){
        return fetch(PHOTOS_URL + QUERY_PARAMETER_TEMPLATE + id)
            .then(res => res.json())
            .then((data) => this.photosList = data)
    }
}