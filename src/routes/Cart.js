import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, sortName, minusCount } from './../store';
import $ from 'jquery';

const Cart = () => {
    let a=useSelector((state)=>{return state})
    let state=useSelector((state)=>state)
    let dispatch=useDispatch()
      
    return (
    <div>
        <div style={{background:"darkred",textAlign:'center',color:"white",width:"100%",height:"30px",fontSize:"20px",marginBottom:"60px"}}>
        장바구니
      </div>
        <Container>
            <Table style={{textAlign:"center",verticalAlign:"middle"}}>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" checked='checked' value='' readOnly></input>
                        </th>
                        <th>상품</th>
                        <th style={{textAlign:"left"}}>상품명</th>
                        <th width="13%">주문수량</th>
                        <th>수량변경하기</th>
                        <th width="17%">가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((v,i)=>
                        <tr key={i}  className='blanck4'>
                            <td><input type="checkbox" style={{verticalAlign:"middle"}} name='cart' checked='checked' value='' readOnly></input></td>

                            <td><img src={state.cart[i].imgUrl} style={{width:"80px"}}></img></td>

                            <td style={{textAlign:"left"}}>{state.cart[i].name}</td>

                            <td>{state.cart[i].count}</td>

                            <td>
                                <button onClick={()=>dispatch(addCount(state.cart[i].id))} className="cartBtn">+</button>
                                <button onClick={()=>dispatch(minusCount(state.cart[i].id))} className="cartBtn minusBtn">-</button>
                            </td>

                            <td>{state.cart[i].count*state.cart[i].price} 원</td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
            <div style={{background:"white",color:"darkred",width:"100%",height:"80px",fontSize:"20px",marginBottom:"20px",border:'2px solid darkred',display:"flex",alignItems:"center",justifyContent:"space-evenly",padding:"20px",textAlign:"center"}}>
                <span style={{padding:"10px"}}>주문금액 <Amount></Amount> 원</span>+<span style={{padding:"10px"}}>배송비 3500원</span>=<span style={{padding:"10px"}}>총 결제금액 <Amount2></Amount2>원</span>
            </div>
            <div style={{border:"none",width:"100%",textAlign:"right",marginBottom:"60px"}}>
                <Button onClick={()=>{dispatch(sortName(state.cart.Name))}} className="sortBtn" variant="outline-danger">이름순정렬</Button>{' '}
                <Button  className="sortBtn" variant="outline-danger">선택구매</Button>{' '}
                <Button  className="sortBtn" variant="outline-danger">전체구매</Button>{' '}
            </div>
        </Container>
     </div>
    );
};

function Amount(){
    let state=useSelector((state)=>state);
    
    // var countClass=$('.blanck4').length;
    // var sum=0;
    // var total=0;
    // for(var i=0; i<countClass; i++){
    //     sum+=state.cart[i].count*state.cart[i].price;
    //     total=sum;
    //     return total;
    // }

    return(
        <>
        {state.cart[0].count*state.cart[0].price+state.cart[1].count*state.cart[1].price+state.cart[2].count*state.cart[2].price+state.cart[3].count*state.cart[3].price+state.cart[4].count*state.cart[4].price+state.cart[5].count*state.cart[5].price}
        </>
    )
}

function Amount2(){
    let state=useSelector((state)=>state)

    // var sum1=0;
    // var total1=0;
    // for(var i=0;i<1;i++){
    //     for(var i=0; i<$('.blanck4').length; i++){
    //         sum1+=state.cart[i].count*state.cart[i].price;
    //         total1=sum1;
    //     }
    //     total1+=3500;
    // }
    // return Amount2=total1;

    return(
        <>
        {state.cart[0].count*state.cart[0].price+state.cart[1].count*state.cart[1].price+state.cart[2].count*state.cart[2].price+state.cart[3].count*state.cart[3].price+state.cart[4].count*state.cart[4].price+state.cart[5].count*state.cart[5].price+3500}
        </>
    )
}

export default Cart;


