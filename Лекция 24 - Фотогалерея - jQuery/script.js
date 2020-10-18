$(() => {
    
    const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos?albumId=';
    const ALBUM_ID = 1;

    const $photosContainer = $('#links');
    const $photoTemplate = $('#photoTemplate').html();


    let photosList = [];


    init();

    
    function init() {
        getPhotosList().then(savePhotosList).then(renderPhotosList);
    }

    function getPhotosList() {
        return fetch(PHOTOS_URL + ALBUM_ID).then((res) => res.json())
    }

    function savePhotosList(data) {
        return (photosList = data);
    }

    function renderPhotosList(data) {
        const html = data.map(getPhotoHtml).join('\n');

        $photosContainer.html(html);        
    }
 
    function getPhotoHtml({url, title, thumbnailUrl}) {
        return $photoTemplate
                            .replace('{{url}}', url)
                            .replace('{{title}}', title)
                            .replace('{{thumbnailUrl}}', thumbnailUrl)
                            .replace('{{alt}}', photo.title);
    }
})