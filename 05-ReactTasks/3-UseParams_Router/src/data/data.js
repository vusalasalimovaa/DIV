const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
    category: "tech",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu470ZLW8ZsDAZxEImUlRDMAjQcrZgT97d9A&s",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 500,
    category: "tech",
    image:
      "https://www.dataselect.com/wp-content/uploads/2023/08/Smartphone-Specifications-Explained-2.webp",
  },
  {
    id: 3,
    name: "Tablet",
    price: 300,
    category: "tech",
    image:
      "https://p2-ofp.static.pub/fes/cms/2021/10/28/juqs65pgl1gh3dysi7yv1tnvtsiqva364946.png",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 200,
    category: "tech",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYso33M1gveZFihwk5c0Btm8RuzaCxDYrsA&s",
  },
  {
    id: 5,
    name: "Headphones",
    price: 150,
    category: "tech",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMXAsz_IvM1FRkW8oPDB7AJnCIm_7_jpP1Q&s",
  },
  {
    id: 6,
    name: "Pizza",
    price: 20,
    category: "food",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1lpruKcy8C9rhAWKCcPOFuvToDRembz-oA&s",
  },
  {
    id: 7,
    name: "Burger",
    price: 10,
    category: "food",
    image:
      "https://simplehomeedit.com/wp-content/uploads/2024/03/Homemade-Beef-Burgers-4.webp",
  },
  {
    id: 8,
    name: "Pasta",
    price: 15,
    category: "food",
    image:
      "https://www.allrecipes.com/thmb/mvO1mRRH1zTz1SvbwBCTz78CRJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg",
  },
  {
    id: 9,
    name: "Salad",
    price: 8,
    category: "food",
    image:
      "https://www.foodandwine.com/thmb/IuZPWAXBp4YaT9hn1YLHhuijT3k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-big-italian-salad-hero-83e6ea846722478f8feb1eea33158b00.jpg",
  },
  {
    id: 10,
    name: "Sushi",
    price: 25,
    category: "food",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfV7iV6CZBb5VR_92P5pFHdcbtsNv8ABAKg&s",
  },
  {
    id: 11,
    name: "Sofa",
    price: 250,
    category: "furniture",
    image:
      "https://cane-line.com/cdn/shop/products/0013_CANE_LINE_INDOOR_2022_077_11935.jpg?v=1665111718",
  },
  {
    id: 12,
    name: "Chair",
    price: 100,
    category: "furniture",
    image:
      "https://www.hslchairs.com/media/x5vmiydg/cr_hsl_0222_11630993_glenmore_singlechair2_03-lighter-ext-v2-2200.jpg?cc=0.22188860060261126,0.36128241801039435,0,0.05741187611661491&width=525&height=348&v=1da6a30af842b20",
  },
  {
    id: 13,
    name: "Table",
    price: 150,
    category: "furniture",
    image:
      "https://i1.adis.ws/i/fv/PRODSAIGXTB-MT-001_saigon_extending-dining-table-metal-base__lifestyle?$medium$&w=579&fmt=webp",
  },
  {
    id: 14,
    name: "Bookshelf",
    price: 120,
    category: "furniture",
    image: "https://m.media-amazon.com/images/I/81Foum06q6L.jpg",
  },
  {
    id: 15,
    name: "Wardrobe",
    price: 300,
    category: "furniture",
    image:
      "https://www.ikea.com/gb/en/images/products/pax-wardrobe-white__0915674_ph145071_s5.jpg?f=s",
  },
  {
    id: 16,
    name: "T-shirt",
    price: 30,
    category: "clothing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4KPN0SAMU7i7aZ0lIf-qsFsgnxqqj1_6WQ&s",
  },
  {
    id: 17,
    name: "Jeans",
    price: 60,
    category: "clothing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7yXXm8Q5dSGRPMre74xz5G7oSUEsJrBzlw&s",
  },
  {
    id: 18,
    name: "Jacket",
    price: 100,
    category: "clothing",
    image: "https://m.media-amazon.com/images/I/71g+ctE-efL._AC_UY1000_.jpg",
  },
  {
    id: 19,
    name: "Dress",
    price: 80,
    category: "clothing",
    image:
      "https://cdn.media.amplience.net/i/truworths/prod3117346_1?fmt=auto&$pdp-main-mobile$",
  },
  {
    id: 20,
    name: "Shoes",
    price: 120,
    category: "clothing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dIAwxlAgYJxDB_Yfmv7lFT-nxqm27pzCdw&s",
  },
  {
    id: 21,
    name: "Monitor",
    price: 300,
    category: "tech",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWBokiZAbXc7DWF3qm-dbPh8wThTdNttpxA&s",
  },
  {
    id: 22,
    name: "Keyboard",
    price: 50,
    category: "tech",
    image:
      "https://down-my.img.susercontent.com/file/3e25dfcd2d032a1bf8116a01e296cb90",
  },
  {
    id: 23,
    name: "Mouse",
    price: 40,
    category: "tech",
    image:
      "https://m.media-amazon.com/images/I/61lCLrCtuhL.AC_UF894,1000_QL80.jpg",
  },
  {
    id: 24,
    name: "Printer",
    price: 200,
    category: "tech",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOyINENX74NbtxaV2IThlsAkeR_V5AMp-OA&s",
  },
  {
    id: 25,
    name: "Camera",
    price: 400,
    category: "tech",
    image:
      "https://www.premiumbeat.com/blog/wp-content/uploads/2020/07/Camera-Tech-Cover-photo.jpg",
  },
  {
    id: 26,
    name: "Steak",
    price: 50,
    category: "food",
    image:
      "https://www.seriouseats.com/thmb/-KA2hwMofR2okTRndfsKtapFG4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/_optaboutcomcoeusresourcescontent_migrationserious_eatsseriouseats.comrecipesimages201505_Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg",
  },
  {
    id: 27,
    name: "Cake",
    price: 30,
    category: "food",
    image:
      "https://www.foodandwine.com/thmb/H9NS3GaVp-2XHt6wbPtrhwh0bws=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Black-Forest-Cake-FT-RECIPE0623-29bb291902e845bab17a7fc1d65e4ebb.jpg",
  },
  {
    id: 28,
    name: "Coffee",
    price: 5,
    category: "food",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnnDQRh5hI6SFNyOktZwMs4gGo2fJnXyx0A&s",
  },
  {
    id: 29,
    name: "Books",
    price: 20,
    category: "furniture",
    image:
      "https://images.ctfassets.net/o78em1y1w4i4/LHN0F94cNFCx1drEcfcsY/984e632abf38018f2a6ab22c4b61fdc6/teaser-book-with-heart-pages.jpg?fm=webp&w=1160&q=75",
  },
  {
    id: 30,
    name: "Lamp",
    price: 60,
    category: "furniture",
    image:
      "https://www.rockettstgeorge.co.uk/cdn/shop/products/rockettstgeorge-black-crow-table-lamp-lores.jpg?v=1683720783",
  },
];

export default products;