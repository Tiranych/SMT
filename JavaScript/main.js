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

    $('.technique__item-link').on('click', function (e) {
        e.preventDefault()
    })
})