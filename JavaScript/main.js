$(function () {
    async function initMap() {
        await ymaps3.ready;

        const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

        // Иницилиазируем карту
        const map = new YMap(
            // Передаём ссылку на HTMLElement контейнера
            document.getElementById('map'),

            // Передаём параметры инициализации карты
            {
                location: {
                    // Координаты центра карты
                    center: [37.86899077446467, 55.769501378106725],
                    // Уровень масштабирования
                    zoom: 17
                }
            }

        );
        
        // Добавляем слой для отображения схематической карты
        map.addChild(new YMapDefaultSchemeLayer());
    }

    initMap();

    $('.header__nav-link, .header__button, .footer__nav-link').on('click', function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body, html').animate({ scrollTop: top }, 800)
    });

    $('.technique__item-link, .overlay-off').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('technique__item-jcb')) {
            $('.technique__jcb').addClass('technique__jcb--active')
            $('.overlay-off').removeClass('overlay-on')
        }
        else if ($(this).hasClass('technique__item-autocrane')) {
            $('.technique__autocrane').addClass('technique__autocrane--active')
            $('.overlay-off').removeClass('overlay-on')
        }
        else if ($(this).hasClass('technique__item-man')) {
            $('.technique__man').addClass('technique__man--active')
            $('.overlay-off').removeClass('overlay-on')
        }
        else {
            if ($('.technique__jcb').hasClass('technique__jcb--active')) {
                $('.technique__jcb').removeClass('technique__jcb--active')
                $('.overlay-off').addClass('overlay-on')
            }
            else if ($('.technique__autocrane').hasClass('technique__autocrane--active')) {
                $('.technique__autocrane').removeClass('technique__autocrane--active')
                $('.overlay-off').addClass('overlay-on')
            }
            else if ($('.technique__man').hasClass('technique__man--active')) {
                $('.technique__man').removeClass('technique__man--active')
                $('.overlay-off').addClass('overlay-on')
            }
        }
    })
})