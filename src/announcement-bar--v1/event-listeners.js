window._AnnouncementBarV1 = (new AnnouncementBarV1);
window._AnnouncementBarV1.init();

window.addEventListener('scroll', function() {

    var visibleAnnouncementBarV1 = document.querySelector('.announcement-bar--v1--isVisible');
    if (!visibleAnnouncementBarV1) return;

    window.addEventListener('scroll', function() {
        (new MegaMenu).set_top_position();
    });
});