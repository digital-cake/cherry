window.AnnouncementBarV2 = function() {

    this.paused = false;
    this.default_speed = 4000;

    this.init = function() {
        console.log('hello 1')
        var active_bar = document.querySelector('.announcement-bar--v2');
        if (!active_bar) {return}

        if (window.innerWidth > 599) return;

        document.documentElement.classList.add('announcement-bar--v2--isVisible');

        active_bar.addEventListener('mouseenter', function() {
            window._AnnouncementBarV2.paused = true; 
        });

        active_bar.addEventListener('mouseleave', function() {
            window._AnnouncementBarV2.paused = false;
        });

        setInterval(function(){

            if (!window._AnnouncementBarV2.paused) {
                var active_bar = document.querySelector('.announcement-bar--v2 .active');
                var next_element = (active_bar.nextElementSibling) ? active_bar.nextElementSibling : active_bar.parentNode.children[0];

                active_bar.classList.remove('active');
                next_element.classList.add('active');
            }

        }, window._AnnouncementBarV2.default_speed)
    }
}
