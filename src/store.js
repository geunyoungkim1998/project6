import { configureStore, createSlice } from '@reduxjs/toolkit';

let user=createSlice({
    name:"user",
    initialState:{name:'kim',age:20},
    reducers:{
        changeName(state){
            state.name='john kim'
        },
        increase(state,action){
            state.age+=action.payload
        }
    }
})

let cart=createSlice({
    name:"cart",
    initialState:[
        {id:0, name:"퓨어 클렌징 오일 200ml" ,count:2, price:17400},
        {id:1, name:"비피다 바이옴 콤플렉스 앰플 50ml" ,count:1, price:24500},
        {id:2, name:"비피다 바이옴 컨센트레이트 세럼 35ml" ,count:3, price:24400},
        {id:3, name:"갈락 나이아신 2.0 에센스 50ml" ,count:1, price:23200},
        {id:4, name:"블랙헤드 퓨어 클렌징 오일 킬패드 50매" ,count:1, price:18000},
        {id:5, name:"판테토인 크림 80ml" ,count:1, price:30000},
    ],
    reducers:{
        addCount(state,action){
            let num=state.findIndex((a)=>{return a.id===action.payload})
            state[num].count++
        },
        minusCount(state,action){
            let num=state.findIndex((a)=>{return a.id===action.payload})
            state[num].count--
            if(state[num].count<=0){
                alert("0개 미만으로는 구입할 수 없습니다.");
                state[num].count=0;
            }
        },
        addItem(state,action){
            state.push(action.payload)
        },
        sortName(state,action){
            state.sort((a,b)=>
            a.name>b.name?1:-1)
        }
    }
})

let data=createSlice({
    name:'data',
    initialState:[
        {
            id: 0,
            title: "퓨어 클렌징 오일 200ml",
            text1: "블랙헤드를 녹이는 국민 클렌징 오일",
            imgUrl: "/img/product1.jpg",
            intro:"/img/intro1.jpg",
            content: 29000,
            price: 17400
          },
          {
            id: 1,
            title: "비피다 바이옴 콤플렉스 앰플 50ml",
            text1: "근본부터 탄탄하게! 슬로 에이징 1등 근본 앰플",
            imgUrl: "/img/product2.jpg",
            intro:"/img/intro2.jpg",
            content: 35000,
            price: 24500
          },
          {
            id: 2,
            title: "비피다 바이옴 컨센트레이트 크림 50ml",
            text1: "고영양 기능성 안티에이징 크림",
            imgUrl: "/img/product3.jpg",
            intro:"/img/intro3.jpg",
            content: 40000,
            price: 24400
          },
          {
            id : 3,
            title : "갈락 나이아신 2.0 에센스 50ml",
            text1: "마법 같은 2주 미백 에센스",
            imgUrl: "/img/product4.jpg",
            intro:"/img/intro4.jpg",
            content : 29000,
            price : 23200
          },
          {
            id : 4,
            title : "비피다 바이옴 컨센트레이트 세럼 35ml",
            text1: "고영양 기능성 안티에이징 세럼",
            imgUrl: "/img/product5.jpg",
            intro:"/img/intro5.jpg",
            content : 39000,
            price : 23400
          },
          {
            id : 5,
            title : "비피다 바이옴 앰플 토너 400ml",
            text1: "근본부터 탄탄하게! 1등 근본 앰플 토너",
            imgUrl: "/img/product6.jpg",
            intro:"/img/intro6.jpg",
            content : 25000,
            price : 17500
          },
          {
            id : 6,
            title : "블랙헤드 퓨어 클렌징 오일 킬패드 50매",
            text1: "메이크업부터 블랙헤드까지 한 장에 올킬하는 킬 패드",
            imgUrl: "/img/product7.jpg",
            intro:"/img/intro7.jpg",
            content : 20000,
            price : 18000
          },
          {
            id : 7,
            title : "비피다 바이옴 아쿠아 베리어 크림 80ml",
            text1: "수부지 피부를 위한 비피다 바이옴 함유 속보습 수분 크림",
            imgUrl: "/img/product8.jpg",
            intro:"/img/intro8.jpg",
            content : 24500,
            price : 16000
          },
          {
            id : 8,
            title : "V콜라겐 하트핏 크림 50ml(+증정)",
            text1: "GIFT: V콜라겐 하트핏 앰플 8ml X1",
            imgUrl: "/img/product9.jpg",
            intro:"/img/intro9.jpg",
            content : 38000,
            price : 23650
          },
          {
            id : 9,
            title : "갈락토미 나이아신 에센스 50ml 더블세트(+증정)",
            text1: "GIFT: 갈락토미 클리어스킨 패드 (2매입) X2,갈락토미 클리어스킨 토너 8ml X2",
            imgUrl: "/img/product10.jpg",
            intro:"/img/intro10.jpg",
            content : 58000,
            price : 34000
          },
          {
            id : 10,
            title : "판테토인 크림 80ml",
            text1: "한 겨울 꽉 잡힌 보습 생명력, 판테토인™ 함유 200시간 극찐보습 크림",
            imgUrl: "/img/product11.jpg",
            intro:"/img/intro11.jpg",
            content : 42000,
            price : 30000
          },
          {
            id : 11,
            title : "판테토인 에센스 토너 200ml",
            text1: "극한 한파 칼바람에도 극찐보습, 판테토인™ 함유 고농축 에센스 인 토너",
            imgUrl: "/img/product12.jpg",
            intro:"/img/intro12.jpg",
            content : 32000,
            price : 22400
          }
    ],
    reducers:{
        sortName2(state,action){
            state.sort((a,b)=>
            a.name>b.name?1:-1)
        },
        sortLPrice(state,action){
            state.sort((a,b)=>a.price<b.price?1:-1)
        },
        sortHPrice(state,action){
            state.sort((a,b)=>a.price>b.price?1:-1)
        }
    }
})

export let {changeName,increase}=user.actions
export let {addCount,minusCount,addItem,sortName}=cart.actions
export let {sortName2,sortLPrice,sortHPrice}=data.actions

export default configureStore({
    reducer:{
        user:user.reducer,
        cart:cart.reducer,
        data:data.reducer
    }
})