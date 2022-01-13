window.AnnouncementBarV1 = function() {

    this.paused = false;
    this.default_speed = 4000;

    this.init = function() {

        var active_bar = document.querySelector('.announcement-bar--v1');
        if (!active_bar) {return}

        document.documentElement.classList.add('announcement-bar--v1--isVisible');

        active_bar.addEventListener('mouseenter', function() {
            window._AnnouncementBarV1.paused = true; 
        });

        active_bar.addEventListener('mouseleave', function() {
            window._AnnouncementBarV1.paused = false;
        });

        setInterval(function(){

            if (!window._AnnouncementBarV1.paused) {
                var active_bar = document.querySelector('.announcement-bar--v1 .active');
                var next_element = (active_bar.nextElementSibling) ? active_bar.nextElementSibling : active_bar.parentNode.children[0];

                active_bar.classList.remove('active');
                next_element.classList.add('active');
            }

        }, window._AnnouncementBarV1.default_speed)
    }
}
