const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: ''
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        img: 'Macbook13.png',
        price: 1299,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Air',
        img: 'macbookpro.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                description: ''
            },
            ram: {
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: 8,
                type: 'tb'
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]

let cont = document.querySelector('.container')

for (let item of data) {

    let laptop = document.createElement('div')
    macbook = document.createElement('div')
    lapImg = document.createElement('img')
    desc = document.createElement('div')
    h3 = document.createElement('h3')
    price = document.createElement('p')
    dots = document.createElement('div')
    lightgray = document.createElement('span')
    gray = document.createElement('span')
    gold = document.createElement('span')
    buy = document.createElement('button')
    lapDesc = document.createElement('div')
    description = document.createElement('div')
    box = document.createElement('div')
    h4 = document.createElement('h4')
    descImg = document.createElement('img')
    descText = document.createElement('p')
    links = document.createElement('div')
    a = document.createElement('a')



    laptop.classList.add('laptops')
    macbook.classList.add('macbook')
    lapImg.classList.add('lapImg')
    desc.classList.add('descr')
    dots.classList.add('dots')
    lightgray.classList.add('lightgray')
    gray.classList.add('gray')
    gold.classList.add('gold')
    buy.classList.add('buy')
    lapDesc.classList.add('lapDesc')
    description.classList.add('description')
    box.classList.add('box')
    links.classList.add('links')

    h3.innerHTML = item.title
    price.innerHTML = `$${item.price}`
    buy.innerHTML = 'Buy'
    h4.innerHTML = item.specs.display.title
    // descText = item.
    a.innerHTML = 'Learn more'


    lapImg.src = `./img/${item.img}`
    descImg.src = `./img`
    a.href = '#'

    laptop.append(macbook)
    macbook.append(lapImg, desc, buy)
    desc.append(h3, price, dots)
    dots.append(lightgray, gray, gold)
    lapDesc.append(description)
    description.append(box)
    links.append(a)
    cont.append(laptop, lapDesc, links)


}