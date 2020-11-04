import $ from 'jquery';

export default class AlbumsListView{
    constructor(config){
        console.log('AlbumsListView created');

        this.config = config;
        this.$el = this.initView()
    }

    initView(){
        return $(`<div class="list-group float-left w-25 p-3" id="albumsList"></div>`)
                    .on('click', (e) => this.onAlbumClick(e))        
    }

    renderAlbumsList(albumsList){
        this.$el.html(albumsList.map(this.getAlbumsListEntryTemplate).join('\n'))
    }

    getAlbumsListEntryTemplate(album) {
        return `<button type="button" 
                class="list-group-item list-group-item-action" 
                data-id="${album.id}">${album.title}"
                </button>`   
    }

    onAlbumClick(e){
        const id = $(e.target).data('id');
        this.config.onAlbumClick(id);
    }
}