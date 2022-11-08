
const data = [
    {
        id: 1,
        title: "Nando's",
        image: 'https://i2-prod.mylondon.news/incoming/article23613851.ece/ALTERNATES/s615/0_WB06042022NANDOSCHURRASBUTTERFLY1.jpg',
        type: ['Best Selling'],
        description: "Nando's is a South African multinational fast casual chain that specialises in flame-grilled peri-peri style chicken.",
        rating: 4.5,
        address: ['200 Victoria Street Bugis Junction', 'Singapore'],
        dishes: [
            {id: 1, name: '3 Chicken Wings', description: 'Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served in your choice of spice.', price: 5, image: 'https://images.menu.nandos.dev/uk/pe-ri-pe-ri-chicken/640x360/3-chicken-wings-15.Image-16-9.094057.jpg'},
            {id: 2, name: '1/2 Chicken', description: 'One breast and one leg, flame-grilled and infused with PERi-PERi. Served on the bone with crispy skin, in your choice of spice.', price: 8, image: 'https://images.menu.nandos.dev/uk/pe-ri-pe-ri-chicken/640x360/1-2-chicken-12.Image-16-9.093606.jpg'},
            {id: 3, name: 'PERI-PERI Nuts', description: 'Crunchy almonds, cashews and macadamia nuts in a fiery PERi-PERi seasoning.', price: 3, image: 'https://images.menu.nandos.dev/uk/starters/640x360/pe-ri-pe-ri-nuts-9.Image-16-9.084003.jpg'},
            {id: 4, name: '10 Wing Roulette', description: "Can't decide on your spice? Tuck in to 10 wings with various heat levels (it's not for the faint-hearted!).", price: 11, image: 'https://images.menu.nandos.dev/uk/pe-ri-pe-ri-chicken/640x360/10-wing-roulette-19.Image-16-9.094421.jpg'},
            {id: 5, name: 'Halloumi Sticks & Dip', description: 'Five chunky sticks of grilled halloumi with chilli jam for dipping.', price: 4, image: 'https://images.menu.nandos.dev/uk/starters/640x360/halloumi-sticks-dip-4.Image-16-9.172645.jpg'}
        ],
        long: '103.85558006030325',
        lati: '1.2990849436755605',
        genre: ['Asia', 'Offers']
    },
    {
        id: 2,
        title: "KFC",
        image: 'https://d1ralsognjng37.cloudfront.net/e49579f2-20c2-4f0d-9a16-6945cfa93edd.jpeg',
        type: ['Featured', 'Best Selling'],
        description: "KFC (Kentucky Fried Chicken) is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken.",
        rating: 4.3,
        address: ['242 E 14th St', 'New York', 'USA'],
        dishes: [
            {id: 6, name: '2 PC. DRUM & THIGH COMBO', description: 'A drumstick & thigh, individual mashed potatoes and gravy, biscuit, and a medium drink.', price: 15, image: 'https://digitaleat.kfc.com/menus/image/bare/kfc-2DTCombo?q=75&w=1280'},
            {id: 7, name: 'MAC & CHEESE BOWL', description: "Our Mac & Cheese Bowls combine KFC's rich and creamy mac and cheese, topped with crispy chicken, and sprinkled with a three-cheese blend. Available in classic or spicy.", price: 8, image: 'https://digitaleat.kfc.com/menus/image/bare/kfc-MacCheeseBowl?q=75&w=1280'},
            {id: 8, name: '2 PC. DRUM & THIGH BIG BOX', description: "A drumstick & thigh, 2 sides, biscuit, and a medium drink. Prices and participation may vary. Includes drum and thigh, 2 sides, 1 med drink, 1 biscuit.", price: 18, image: 'https://digitaleat.kfc.com/menus/image/bare/kfc-2pcBigBox?q=75&w=1280'},
            {id: 9, name: 'POPCORN NUGGETS COMBO', description: "Enjoy our bite-sized crispy Popcorn Chicken Nuggets with a side of your choice, one of our signature dipping sauces, biscuit, and a medium drink.", price: 11, image: 'https://digitaleat.kfc.com/menus/image/bare/kfc-PopcornComboFries?q=75&w=1280'},
            {id: 10, name: 'KFC CHICKEN SANDWICH', description: 'Enjoy a premium, all-white meat, double-breaded, Extra Crispy™ chicken breast filet, served on a freshly-toasted buttery brioche bun.', price: 6, image: 'https://digitaleat.kfc.com/menus/image/bare/kfc-cknsndalc?q=75&w=1280'}
        ],
        long: '-73.98645033093949',
        lati: '40.74285960143858',
        genre: ['USA', 'Offers']
    },
    {
        id: 3,
        title: "Yo! Sushi",
        image: 'https://cdn.vox-cdn.com/thumbor/wd1Ya-ydwnhl7ASToBCpbKtUVYU=/0x0:1284x1596/1200x800/filters:focal(540x696:744x900)/cdn.vox-cdn.com/uploads/chorus_image/image/68700299/Tao_Sushi.0.jpg',
        type: ['Best Selling'],
        description: "Yo! Sushi is a company that owns, operates, and franchises conveyor belt sushi restaurants, principally in the United Kingdom, Republic of Ireland, Russia, United Arab Emirates, Saudi Arabia, Bahrain, Kuwait and Australia.",
        rating: 3,
        address: ['Downtown-Dubai', 'Dubai'],
        dishes: [
            {id: 11, name: 'chicken katsu', description: 'Succulent chicken in Japanese panko breadcrumbs; drizzled with fruity tonkatsu sauce & dished up with a fresh pak choi & ponzu salad.', price: 10, image: 'https://cdn.yosushi.com/r/w-630/p-webp/YoSushi/files/6c/6c2f61a1-5ae9-4a54-8607-a592d9031807.638008234110000000.png'},
            {id: 12, name: 'chicken yakisoba', description: "Fresh yakisoba noodles stir-fried in a tangy sauce served with crunchy vegetables & fresh grilled chicken thigh.", price: 10, image: 'https://cdn.yosushi.com/r/w-320/p-webp/YoSushi/files/56/56426b9b-5b6c-4bad-86de-cb26f47d1047.637843254680000000.png'},
            {id: 13, name: 'crunchy california roll', description: "Surimi & avocado roll, topped with mayo, teriyaki & crunchy onion.", price: 12, image: 'https://cdn.yosushi.com/r/w-630/p-webp/YoSushi/files/e7/e71bb661-47b3-43d8-92f6-0763bf388b41.637795960890000000.png'},
            {id: 14, name: "hot topped mock 'duck' maki", description: "Crunchy veggie roll topped with hot shredded vegan mock 'duck' in Korean ketchup (spicy)", price: 11, image: 'https://cdn.yosushi.com/r/w-320/p-webp/YoSushi/files/27/2730479e-f914-4bc9-a384-19cc5ffd6485.638000030080000000.png'},
            {id: 15, name: 'salmon & tuna selection platter', description: '2 YO! rolls, 2 salmon maki, 2 tuna maki, 2 salmon nigiri, 2 tuna nigiri, 2 thick cut slices of salmon & tuna sashimi', price: 25, image: 'https://cdn.yosushi.com/r/w-320/p-webp/YoSushi/files/87/87a0f282-0a18-4150-a451-757b9e299d76.638000030600000000.png'}
        ],
        long: '55.23060075317456',
        lati: '25.53237433328774',
        genre: ['Asia', 'Offers', 'Sushi']
    },
    {
        id: 4,
        title: "Wagamama",
        image: 'https://pyxis.nymag.com/v1/imgs/30b/b6c/27a00fd87a4e2f8713bb69990be812135e-14-wagamama-004.2x.h473.w710.jpg',
        type: ['Featured', 'Best Selling'],
        description: "Wagamama is a British restaurant chain, serving Asian food based on Japanese cuisine.",
        rating: 4,
        address: ['1050 Howell Mill Rd', 'Atlanta', 'USA'],
        dishes: [
            {id: 16, name: 'yasai gyoza ramen', description: 'five steamed yasai gyoza. udon noodles. vegetable broth. roasted bok choi. chilli sambal paste. spring onion. coriander. chilli oil.', price: 10, image: 'https://images.tenkites.com/wagamama/menuitem/chicken-gyoza-ramen-web-750x750px.png'},
            {id: 17, name: 'grilled chicken ramen', description: "marinated chicken. ramen noodles. rich chicken broth with dashi + miso. seasonal greens. menma. spring onion.", price: 11, image: 'https://images.tenkites.com/wagamama/menuitem/grilled_chicken.png'},
            {id: 18, name: 'kare burosu ramen', description: "shichimi-coated silken tofu. grilled mixed mushrooms. seasonal greens. carrot. chilli. coriander. udon noodles.", price: 10, image: 'https://images.tenkites.com/wagamama/menuitem/kare_burosu_ramen.png'},
            {id: 19, name: 'shirodashi pork belly ramen', description: "slow-cooked pork belly. ramen noodles. rich chicken broth with dashi + miso. seasonal greens. menma. ", price: 12, image: 'https://images.tenkites.com/wagamama/menuitem/shirodashi_pork_belly.png'},
            {id: 20, name: 'grilled duck donburi', description: 'shredded grilled duck in spicy teriyaki sauce. carrot. mangetout. sweet potato. red + spring onion. fried egg. cucumber.', price: 10, image: 'https://images.tenkites.com/wagamama/menuitem/grilled_duck.png'}
        ],
        long: '-84.41421070800254',
        lati: '33.81791782286669',
        genre: ['USA', 'Offers']
    },
    {
        id: 5,
        title: "Subway",
        image: 'https://media.timeout.com/images/105757031/750/422/image.jpg',
        type: ['Tasty Discounts'],
        description: "Subway is an American multi-national fast food restaurant franchise that primarily sells submarine sandwiches, wraps, salads and drinks.",
        rating: 3.8,
        address: ['420 NV-439 Suite 102', 'McCarran', 'USA'],
        dishes: [
            {id: 21, name: 'Chicken Teriyaki', description: 'This gourmet specialty is a flavorful blend of tender teriyaki glazed chicken strips . Served hot & toasted on freshly baked bread.', price: 6, image: 'https://www.subway.com/ns/images/menu/TUR/ENG/RPLC-menu-category-sandwich-sweet-onion-chicken-teriyaki-TR-594x334.jpg'},
            {id: 22, name: 'Tuna', description: "Bite into it, and experience flavour that's as fresh as an ocean breeze. Submerge yourself in its waves of unique taste!", price: 13, image: 'https://www.subway.com/ns/images/menu/TUR/ENG/RPLC-all-sandwiches-tuna-TR-594x334.jpg'},
            {id: 23, name: 'Sweet Onion Chicken Teriyaki', description: "Everything but the bread! Turn any one of your favorite sandwiches into a salad. Add crunch to your meal with lettuce, red onions, tomatoes, cucumbers and much more!", price: 8, image: 'https://www.subway.com/ns/images/menu/TUR/ENG/RPLC-salads-spiral-sweet-onion-chicken-teriyaki-TR-594x334.jpg'},
            {id: 24, name: 'Italian B.M.T.®', description: "Everything but the bread! Turn any one of your favorite sandwiches into a salad. Add crunch to your meal with lettuce, red onions, tomatoes, cucumbers and much more!", price: 11, image: 'https://www.subway.com/ns/images/menu/TUR/ENG/RPLC-salads-spiral-veggie-delite-TR-594x334.jpg'},
            {id: 25, name: 'Spicy Italian', description: 'Go ahead, spice up your life. Served on freshly baked bread and toasted to perfection, the Spicy Italian sandwich features spicy pepperoni, salami, and cheese. Add peppers, oil, vinegar or anything else your taste buds desire.', price: 8, image: 'https://www.subway.com/ns/images/menu/TUR/ENG/RPLC-all-sandwiches-spicy-italian-TR-594x334.jpg'}
        ],
        long: '-119.58212856735288',
        lati: '40.33314551296037',
        genre: ['USA', 'Offers']
    },
    {
        id: 6,
        title: "Five Guys",
        image: 'https://galleriadallas.com/assets/directory/fiveguys.jpg',
        type: ['Tasty Discounts'],
        description: "Five Guys Enterprises LLC is an American fast food restaurant chain focused on hamburgers, hot dogs, and French fries.",
        rating: 4.1,
        address: ['Plaza Singapura', 'Singapore'],
        dishes: [
            {id: 26, name: 'Little Cheeseburger', description: 'Fresh, hand-formed patty hot off the grill with American- style cheese. Add as many toppings as you want.', price: 9, image: 'https://2.bp.blogspot.com/_W-pG7tUmJk0/TOooM30ZA8I/AAAAAAAADGo/4eKYCbFnSbs/w1200-h630-p-k-no-nu/fiveguys_bacon_cheeseburger_01.jpg'},
            {id: 27, name: 'Bacon Cheese Dog', description: "All-beef hot dog, split and grilled lengthwise for a caramelized exterior, American-style cheese on top, a layer of apple-wood smoked bacon and any of your favorite toppings.", price: 8, image: 'https://live.staticflickr.com/65535/46963893105_320fbd60e4_b.jpg'},
            {id: 28, name: 'Veggie Cheese Sandwich', description: "Freshly grilled onions, mushrooms and green peppers layered with lettuce, tomatoes and slices of American style cheese on a soft, toasted sesame seed bun.", price: 6, image: 'https://www.easycheesyvegetarian.com/wp-content/uploads/2020/10/Cheese-veggie-sandwich-Five-Guys-8-650x433.jpg'},
            {id: 29, name: 'Little Cajun Fries', description: "Freshly made boardwalk-style fries, cooked in pure, cholesterol-free, 100% peanut oil, and then showered with a heavy dose of Cajun spice.", price: 5, image: 'https://bluejeanchef.com/uploads/2020/07/Cajun-Fries-1280-8-819x1024.jpg'},
            {id: 30, name: 'Coke', description: 'Delicious and refreshing, one-of-a-kind taste to complete your meal.', price: 3, image: 'https://burgerkingfrance.twic.pics/img/products/f/ca/fcad08fb-732c-4077-a88b-83335d2d7cd9_?twic=v1/contain=350x350'}
        ],
        long: '103.76809157516067',
        lati: '2.0074785229800227',
        genre: ['Asia', 'Offers']
    },
]

module.exports = data