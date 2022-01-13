window._AnnouncementBar = (new AnnouncementBar);
window._AnnouncementBar.init();

window.addEventListener('scroll', function() {

    var visibleAnnouncementBar = document.querySelector('.announcement-bar--isVisible');
    if (!visibleAnnouncementBar) return;

    window.addEventListener('scroll', function() {
        (new MegaMenu).set_top_position();
    });
});