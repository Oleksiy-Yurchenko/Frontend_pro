import {ALBUMS_URL} from '../config';

export default class AlbumsCollection{
    constructor(){
        console.log('Albums collection created');

        this.albumsList = [];

    }

    getAlbumsList(){
        return fetch(ALBUMS_URL)
            .then(res => res.json())
            .then((data) => this.albumsList = data);
    }
}

