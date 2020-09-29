const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const QUERY_PARAMETER_TEMPLATE = '?albumId=';
const DEFAULT_ALBUM_INDEX = 0;

const albumsListEl = document.getElementById('albumsList');
const photoAlbumEl = document.getElementById('photoAlbum');
const albumListEntryTemplate = document.getElementById('albumListEntryTemplate').innerHTML;
const photoCardTemplate = document.getElementById('photoCardTemplate').innerHTML;


getAlbumsData();

albumsListEl.addEventListener('click', onAlbumClick);


function onAlbumClick(event){
    removePhotos();
    getAlbumPhotos(event.target);
}

function getAlbumsData(){
    fetch(ALBUMS_URL)
    .then((res) => res.json())
    .then((data) => {
        renderAlbumsList(data);
        return data[DEFAULT_ALBUM_INDEX].id;
    })
    .then((id) => generatePhotosURL(id))
    .then((url) => getPhotos(url));
}

function renderAlbumsList(albumsList) {
    albumsList.forEach((album) => renderAlbum(album));
}

function getAlbumPhotos(e){
    const albumId = e.dataset.albumId;
    getPhotos(generatePhotosURL(albumId));
}

function getPhotos(url){    
    fetch(url)                                             
    .then((res) => res.json())
    .then((data) => (photosList = data)) 
    .then((data) => renderAlbumPhotos(data));
}

function removePhotos(){
    photoAlbumEl.innerHTML ='';
}

function renderAlbum(album) {
    const html = albumListEntryTemplate
                .replace('{{id}}', album.id)
                .replace('{{albumName}}', album.title)
    albumsListEl.insertAdjacentHTML('beforeend', html);
}

function renderAlbumPhotos() {
    photosList.forEach((photo) => renderPhoto(photo));
}

function renderPhoto(photo){
    const html = photoCardTemplate
                .replace('{{imageURL}}', photo.thumbnailUrl)
                .replace('{{cardTitle}}', photo.title);
    photoAlbumEl.insertAdjacentHTML('beforeend', html);
}

function generatePhotosURL(albumId){
    return PHOTOS_URL + QUERY_PARAMETER_TEMPLATE + albumId;
}
