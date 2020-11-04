import $ from 'jquery';
export default class AlbumPhotosView{

    constructor(config){
        console.log('AlbumsPhotosView');

        this.config = config;
        this.$el = this.initView()
    }

    initView() {
        return $('<div id="photoAlbum"></div>');
    }    

    getPhotoTemplate(photo) {
        return `<div class="card float-left ml-2 mt-2" style="width: 9.37rem;">
                <img src="${photo.url}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">${photo.title}</p>
                </div>
                </div>`   
    }

    renderAlbumPhotos(photosList){
        this.$el.html(photosList.map(this.getPhotoTemplate).join('\n'));
    }
}
