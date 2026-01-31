document.addEventListener('DOMContentLoaded', () =>{
    let sims = document.querySelector('.button')
    sims.addEventListener('click', () =>{
        alert("Вы загрузили вирус")
    })
    
    let camera = document.querySelector('.camera')
    camera.addEventListener('click', () => {
        interval1 = setInterval(() => {         
            camera.src = 'assets/camera_first_flash.png'
            clearInterval(interval1)
            interval2 = setInterval(()=> {
                camera.src = 'assets/camera_second_flash.png'
                clearInterval(interval2)
                interval3 = setInterval(()=> {
                    camera.src = 'assets/camera_first_flash.png'
                    clearInterval(interval3)
                    interval4 = setInterval(()=> {
                        camera.src = 'assets/camera_second_flash.png'
                        clearInterval(interval4)
                        interval5 = setInterval(() => {
                            camera.src = 'assets/camera.png'
                            clearInterval(interval)
                        })
                    }, 250)
                }, 250)
            }, 250)
        }, 250)
    })

   
    const images = [
        "assets/cat1.png",
        "assets/cat2.png",
        "assets/cat3.png",
        "assets/cat4.png",
        "assets/cat5.png",
        "assets/cat6.png",
        "assets/cat7.png",
        "assets/cat8.png"
    ]

    let index = 0

    const img = document.querySelector(".cats")

    img.addEventListener("click", () => {
        console.log('jnjn')
        index++ 
        if (index >= images.length) {
            index = 0
        }
        img.src = images[index];
    });



    const state = {};
    const carouselList = document.querySelector('.carousel__list');
    const carouselItems = document.querySelectorAll('.carousel__item');
    const elems = Array.from(carouselItems);

    carouselList.addEventListener('click', function (event) {
    var newActive = event.target;
    var isItem = newActive.closest('.carousel__item');

    if (!isItem || newActive.classList.contains('carousel__item_active')) {
        return;
    };
    
    update(newActive);
    });

    const update = function(newActive) {
    const newActivePos = newActive.dataset.pos;

    const current = elems.find((elem) => elem.dataset.pos == 0);
    const prev = elems.find((elem) => elem.dataset.pos == -1);
    const next = elems.find((elem) => elem.dataset.pos == 1);
    const first = elems.find((elem) => elem.dataset.pos == -2);
    const last = elems.find((elem) => elem.dataset.pos == 2);
    
    current.classList.remove('carousel__item_active');
    
    [current, prev, next, first, last].forEach(item => {
        var itemPos = item.dataset.pos;

        item.dataset.pos = getPos(itemPos, newActivePos)
    });
    };

    const getPos = function (current, active) {
    const diff = current - active;

    if (Math.abs(current - active) > 2) {
        return -current
    }

    return diff;
    }


})