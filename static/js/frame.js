$('#preview').on('modal', function() {
    var html = ue.getContent();
    document.getElementsByClassName('rich_media_content')[0].innerHTML = html;
});