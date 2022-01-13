window.AnnouncementBar = function() {

    this.paused = false;
    this.default_speed = 4000;

    this.init = function() {

        var active_bar = document.querySelector('.announcement-bar--v1');
        if (!active_bar) {return}

        document.documentElement.classList.add('announcement-bar--v1--isVisible');

        active_bar.addEventListener('mouseenter', function() {
            window._AnnouncementBar.paused = true; 
        });

        active_bar.addEventListener('mouseleave', function() {
            window._AnnouncementBar.paused = false;
        });

        setInterval(function(){

            if (!window._AnnouncementBar.paused) {
                var active_bar = document.querySelector('.announcement-bar--v1 .active');
                var next_element = (active_bar.nextElementSibling) ? active_bar.nextElementSibling : active_bar.parentNode.children[0];

                active_bar.classList.remove('active');
                next_element.classList.add('active');
            }

        }, window._AnnouncementBar.default_speed)
    }
}
