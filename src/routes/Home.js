import { Button,Container,Carousel,Row,Col} from 'react-bootstrap';
import {useState}from 'react';
import { Outlet, useNavigate} from 'react-router-dom';
import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home(props){

  let navigate=useNavigate();
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  const settings = {
    arrow:true,
    dots: true,
    infinite: true,
    speed: 700,
    autoplay:true,
    autoplaySpeed:6000,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerPadding:'0px'
  };

  return(
    <>
    {/* slide */}
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/slide2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/slide4.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/slide1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* 안내사항 */}
    <Container id='alamContainer'>
      <Row xs={1} md={2}>
        <Col className='container1'><img src='https://htmldemo.net/ecolife/ecolife/assets/images/icons/static-icons-1.png'alt='img'></img>
        <div>
          <h6>무료배송</h6>
          <p>20,000 이상 구매시 무료배송</p>
        </div>
        </Col>
        <Col className='container1'><img src='https://htmldemo.net/ecolife/ecolife/assets/images/icons/static-icons-2.png'alt='img'></img>
        <div>
          <h6>무료교환</h6>
          <p>수령 후 7일 이내에 교환 시 무료교환</p>
        </div>
        </Col>
        <Col className='container1'><img src='https://htmldemo.net/ecolife/ecolife/assets/images/icons/static-icons-3.png'alt='img'></img>
        <div>
          <h6>100% 결제 안전 보장</h6>
          <p>결제 정보를 안전하게 보호합니다</p>
        </div>
        </Col>
        <Col className='container1'><img src='https://htmldemo.net/ecolife/ecolife/assets/images/icons/static-icons-4.png'alt='img'></img>
        <div>
          <h6>24시 상담</h6>
          <p>7일 24시간 상담운영</p>
        </div>
        </Col>
      </Row>
    </Container>

    {/* 카테고리 */}
    <Container id='alamContainer'>
    <div className="titlefont">카테고리</div>
      <Row xs={3} md={3} lg={6}>
        <Col className='container1'  style={{textAlign:"center",justifyContent:"center"}}>
        <div onClick={()=>{navigate("/detail/4")}} style={{cursor:"pointer"}}>
          <img src='img/icon8.png'alt='img' style={{width:"50px"}}></img>
          <h6>메이크업</h6>
        </div>
        </Col>
        <Col className='container1' style={{textAlign:"center",justifyContent:"center"}}>
        <div onClick={()=>{navigate("/detail/10")}} style={{cursor:"pointer"}}>
          <img src='img/icon3.png'alt='img' style={{width:"50px"}}></img>
          <h6>비건 화장품</h6>
        </div>
        </Col>
        <Col className='container1' style={{textAlign:"center",justifyContent:"center"}}>
        <div onClick={()=>{navigate("/detail/6")}} style={{cursor:"pointer"}}>
          <img src='img/icon6.png'alt='img' style={{width:"50px"}}></img>
          <h6>세안/세정</h6>
        </div>
        </Col>
        <Col className='container1' style={{textAlign:"center",justifyContent:"center"}}>
        <div onClick={()=>{navigate("/detail/3")}} style={{cursor:"pointer"}}>
          <img src='img/icon7.png'alt='img' style={{width:"50px"}}></img>
          <h6>앰플</h6>
        </div>
        </Col>
        <Col className='container1' style={{textAlign:"center",justifyContent:"center"}}>
        <div onClick={()=>{navigate("/detail/8")}} style={{cursor:"pointer"}}>
          <img src='img/icon9.png'alt='img' style={{width:"50px"}}></img>
          <h6>크림</h6>
        </div>
        </Col>
        <Col className='container1' style={{textAlign:"center",justifyContent:"center"}}>
        <div onClick={()=>{navigate("/detail/7")}} style={{cursor:"pointer"}}>
          <img src='img/icon11.png'alt='img' style={{width:"50px"}}></img>
          <h6>바디</h6>
        </div>
        </Col>
        
      </Row>
    </Container>

    {/* 상품이미지 */}
    <Container id="shop1" style={{marginBottom:"80px"}}>
      <div className="titlefont">베스트</div>
      <div style={{textAlign:"center",marginBottom:"20px"}}>
      <Button variant="outline-danger" className="selectbtn" 
      onClick={()=>{
        let copy=[...props.cosmetic].sort((a,b)=>a.id>b.id?1:-1)
        props.setCosmetic(copy);
        let res1=[];
        for(let i in copy){
          res1.push(copy[i].id)
        }
        props.setRes(res1);
      }}
      >인기순 정렬</Button>{' '}
      <Button variant="outline-danger" className="selectbtn" 
      onClick={()=>{
        let copy=[...props.cosmetic].sort((a,b)=>a.price>b.price?1:-1)
        props.setCosmetic(copy);
        let res1=[];
        for(let i in copy){
          res1.push(copy[i].id)
        }
        props.setRes(res1);
      }}
      >낮은 가격순 정렬</Button>{' '}
      <Button variant="outline-danger" className="selectbtn" 
      onClick={()=>{
        let copy=[...props.cosmetic].sort((a,b)=>a.price<b.price?1:-1)
        props.setCosmetic(copy);
        let res1=[];
        for(let i in copy){
          res1.push(copy[i].id)
        }
        props.setRes(res1);
      }}
      >높은 가격순 정렬</Button>{' '}
      </div>
      <Row sm={1}md={2}lg={4}>
        {
          props.cosmetic.map((v,i)=>{
            return(
              <Product cosmetic={props.cosmetic[i]} i={i+1} res={props.res} setRes={props.setRes} key={i}/>
            )
          })
        }
      </Row>
    </Container>
    <div style={{marginBottom:"80px"}}>
    <div className="titlefont">이벤트</div>
      <Carousel activeIndex={index} onSelect={handleSelect} style={{cursor:"pointer"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slide13.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slide14.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slide15.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slide16.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slide17.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    
    <Outlet></Outlet>

    <Container style={{marginBottom:"80px"}}>
     <div>
        <div className="titlefont">신상품</div>
        <Slider {...settings} style={{cursor:"pointer"}}>
          <div>
          <img src='img/new1.jpg' alt='item' className="slickimg"></img>
          </div>
          <div>
          <img src='img/new2.jpg' className="slickimg" alt='item'></img>
          </div>
          <div>
          <img src='img/new3.jpg' className="slickimg" alt='item'></img>
          </div>
          <div>
          <img src='img/new4.jpg' className="slickimg" alt='item'></img>
          </div>
          <div>
          <img src='img/new5.jpg' className="slickimg" alt='item'></img>
          </div>
          <div>
          <img src='img/new6.jpg' className="slickimg" alt='item'></img>
          </div>
          <div>
          <img src='img/new8.jpg' className="slickimg" alt='item'></img>
          </div>
          <div>
          <img src='img/new9.jpg' className="slickimg"alt='item'></img>
          </div>
          <div>
          <img src='img/new10.jpg' className="slickimg" alt='item'></img>
          </div>
          <div>
          <img src='img/new11.jpg' className="slickimg" alt='item'></img>
          </div>
          <div>
          <img src='img/new12.jpg' className="slickimg" alt='item'></img>
          </div>
        </Slider>
      </div>
    </Container>

    </>
  )
}

function Product(props){
    let navigate=useNavigate();
    
    return(
      <Container>
        <Col>
          <div style={{position:"absolute",width:"50px",height:"50px",background:"darkred",color:"white",borderRadius:"0px 0px 25px 0px",fontSize:"20px",textAlign:"center",lineHeight:"220%"}}>{props.i}</div>
          <div width='25%'>
            <img src={props.cosmetic.imgUrl} width="100%" style={{borderRadius:"0px 60px 0px 60px",cursor:"pointer"}} alt='img' onClick={()=>{
          navigate("/detail/"+props.cosmetic.id)
        }}></img>
            <div style={{display:"flex"}} id="shopbtn1">
            <Button variant="outline-danger" onClick={()=>{navigate("/cart")}}>▷ 장바구니 추가</Button>{' '}
            <Button variant="outline-danger">♡ 위시리스트 추가</Button>{' '}
            <Button variant="outline-danger" onClick={()=>{
          navigate("/detail/"+props.cosmetic.id)
        }}>+ 자세히</Button>{' '}
            </div>
            <p style={{margin:"10px 0px 40px"}} onClick={()=>{
          navigate("/detail/"+props.cosmetic.id)
        }}><span style={{fontSize:"16px"}}>{props.cosmetic.title}</span><br/>
              <span id="oneprice">{props.cosmetic.content}</span>&nbsp;&nbsp;
              <span style={{color:"darkred"}}>{props.cosmetic.price+"원"}</span>
            </p>
          </div>
        </Col>
      </Container>
    )
  }

export default Home;
