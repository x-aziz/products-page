import { createSlice } from "@reduxjs/toolkit";
const product = {
  products: [
    {
      name: "iPhone 13 Pro",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-pro-gold-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072986854",
      color: "Silver",
      price: 999,
    },
    {
      name: "MacBook Air",
      img: " https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UF1000,1000_QL80_.jpg",
      color: "Space Gray",
      price: 999,
    },
    {
      name: "iPad Pro",
      img: "https://images.immediate.co.uk/production/volatile/sites/3/2021/06/iPad-Pro-with-Apple-Pencil-on-top-bd42e70.jpg?resize=768,574",
      color: "Silver",
      price: 799,
    },
    {
      name: "Apple Watch Series 7",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOs0Ee2UM2pSdlKR-dLp0seRHomx0UnPIj_w&s",
      color: "Midnight",
      price: 399,
    },
    {
      name: "AirPods Pro",
      img: "https://helios-i.mashable.com/imagery/articles/06p5PGAjzDSZysaktotmIwr/hero-image.fill.size_1248x702.v1699805275.jpg",
      color: "White",
      price: 249,
    },
    {
      name: "Apple TV 4K",
      img: "https://www.cnet.com/a/img/resize/1c366d0a88fbfbd39e98f89d27962601ba70de95/hub/2022/11/01/de745101-c753-4a3b-b9ae-b28ebfdcf9af/apple-tv-4k-streaming-box-5084.jpg?auto=webp&width=1200",
      color: "Black",
      price: 179,
    },
  ],
  counter: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState: product,
  reducers: {
    //   addProduct(state, action) {
    //     state.products.push(action.payload);
    //   },
    //   deleteProduct(state, action) {
    //     state.products = state.products.filter((product) => product.id!== action.payload);
    //   },
    //   incrementCounter(state) {
    //     state.counter++;
    //   },
  },
});

// Exporting actions
//   export const { addProduct, deleteProduct, incrementCounter } = productSlice.actions;

// Exporting reducer

export default productSlice.reducer;

// Exporting selectors
//   export const selectAllProducts = (state) => state.product.products;
