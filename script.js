document.addEventListener('DOMContentLoaded', () => {
    let sims = document.querySelector('.button')
    sims.addEventListener('click', () => {
        alert("Вы загрузили вирус")
    })

    const camera = document.querySelector('.camera')

    camera.addEventListener('click', () => {
        const frames = [
            'assets/camera_first_flash.png',
            'assets/camera_second_flash.png',
            'assets/camera_first_flash.png',
            'assets/camera_second_flash.png',
            'assets/camera.png'
        ]

        let i = 0

        const interval = setInterval(() => {
            camera.src = frames[i]
            i++

            if (i >= frames.length) {
                clearInterval(interval)
            }
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
        index++
        if (index >= images.length) {
            index = 0
        }
        img.src = images[index];
    });

    const list = document.querySelector(".list");
    const items = Array.from(document.querySelectorAll(".item"));
    const player = new Audio();

    list.addEventListener("click", (e) => {
        const clickedItem = e.target.closest(".item");
        if (!clickedItem) return;

        const activePos = Number(clickedItem.dataset.pos);

        if (activePos === 0) {
            player.src = clickedItem.dataset.track;
        }

        player.play()

        if (activePos === -2 || activePos === 2) return;


        items.forEach((item) => {
            const currentPos = Number(item.dataset.pos);
            item.dataset.pos = getPos(currentPos, activePos);
        });

        const activeItem = items.find(i => Number(i.dataset.pos) === 0);
        player.src = activeItem.dataset.track;
        player.play();
    });

    function getPos(current, active) {
        const diff = current - active;

        if (Math.abs(diff) > 2) return -current;

        return diff;
    }

    const imagesl = [
        "assets/san.png",
        "assets/kur.jpg",
        "assets/sakhalin.jpg"
    ]

    let indexx = 0

    const block = document.querySelector(".second_widget")

    block.addEventListener("click", () => {
        indexx = (indexx + 1) % imagesl.length
        block.style.backgroundImage = `url(${imagesl[indexx]})`
    })


})
