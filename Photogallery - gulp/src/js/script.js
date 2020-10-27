$(() => {
    
    const $photoTemplate = $('#photoTemplate').html();
    const $photosContainer = $('#links');

    API.getPhotosList().then(renderPhotosList);

    $photosContainer.on('click', onPhotoClick);


    function onPhotoClick(event) {
        event = event || window.event;
        const target = event.target || event.srcElement;
        const link = target.src ? target.parentNode : target;
        const options = { 
            index: link, 
            event: event 
        }
        const links = $('a');
        blueimp.Gallery(links, options);
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
    }
})