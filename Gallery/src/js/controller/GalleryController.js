import AlbumsListView from '../view/AlbumsListView';
import AlbumPhotosView from '../view/AlbumPhotosView';
import AlbumsCollection from '../model/AlbumsCollection';
import AlbumPhotosCollection from '../model/AlbumPhotosCollection';
import $ from 'jquery';

export default class GalleryController{
    constructor(){
        this.$container = $('.container');
                
        this.albumsListView = new AlbumsListView({
            onAlbumClick: (id) => this.processAlbum(id),
        });
        this.$container.append(this.albumsListView.$el);

        this.albumPhotosView = new AlbumPhotosView();
        this.$container.append(this.albumPhotosView.$el);

        this.albumsCollection = new AlbumsCollection();
        this.albumPhotosCollection = new AlbumPhotosCollection();

        this.albumsCollection.getAlbumsList()
            .then(() => {
                this.albumsListView.renderAlbumsList(this.albumsCollection.albumsList);
                return this.processAlbum(this.albumsCollection.albumsList[0].id);
            });
    }  
    
    processAlbum(id){
        this.albumPhotosCollection.getPhotosList(id)
        .then(() => {
            this.albumPhotosView.renderAlbumPhotos(this.albumPhotosCollection.photosList)
        });
    }
}