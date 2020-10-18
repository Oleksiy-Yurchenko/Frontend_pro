$(() => {
    
    const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos?albumId=1';

    const $photosContainer = $('#links');
    const $photoTemplate = $('#photoTemplate').html();


    let photosList = [];


    init();

    
    function init() {
        getPhotosList().then(savePhotosList).then(renderPhotosList);
    }

    function getPhotosList() {
        return fetch(PHOTOS_URL).then((res) => res.json())
    }

    function savePhotosList(data) {
        return (photosList = data);
    }

    function renderPhotosList(data) {
        const html = data.map(getPhotoHtml).join('\n');

        $photosContainer.html(html);        
    }
 
    function getPhotoHtml(photo) {
        return $photoTemplate
                            .replace('{{id}}', photo.id)
                            .replace('{{url}}', photo.url)
                            .replace('{{title}}', photo.title)
                            .replace('{{thumbnailUrl}}', photo.thumbnailUrl)
                            .replace('{{alt}}', photo.title);
    }
})

