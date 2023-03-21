import {Button,Container,Form,Nav,Navbar,Offcanvas,InputGroup,Row,Col,Accordion} from 'react-bootstrap';
import './App.css';
import data from './data';
import {useState}from 'react';
import {Routes,Route,Link,useNavigate} from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';
import Cart from './routes/Cart';
import Login from './routes/Login';


function App() {
  let[cosmetic,setCosmetic]=useState(data);
  let navigate=useNavigate();
  let [res,setRes]=useState([0,1,2,3,4,5,6,7,8,9,10,11]);
  let[btn,setBtn]=useState(data);
  return (
    <>
      {/* nav bar */}
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid  id='blacnk5' style={{position:"fixed",top:"0",background:"#f7f7f7",zIndex:"20",height:"50px"}}>
            <div></div>
            <Navbar.Brand href="/"><img src='https://www.manyo.co.kr/data/skin/manyo/images/design/logo.png' style={{marginLeft:'70px'}} width='140px' alt='img' /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}><Link to='/'><img src='https://www.manyo.co.kr/data/skin/manyo/images/design/logo.png' width='100px' alt='img'/></Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link onClick={()=>{navigate('/cart')}}>장바구니+</Nav.Link>
                <Nav.Link onClick={()=>{navigate('/Login')}}>로그인+</Nav.Link>
                  <Nav.Link>
                  <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">전체 카테고리
        <Accordion.Header>피부타입별</Accordion.Header>
        <Accordion.Body>
          <ul onClick={()=>{navigate('/detail/0')}}>
            <li>건성</li>
            <li>복합성</li>
            <li>민감성</li>
            <li>수부지</li>
            <li>장벽강화</li>
            <li>고민성피부</li>
            <li>모공, 피지</li>
            <li>탄력, 주름</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>카테고리별</Accordion.Header>
        <Accordion.Body>
          <ul onClick={()=>{navigate('/detail/1')}}>
            <li>전체</li>
            <li>클렌징</li>
            <li>스킨, 토너, 미스트</li>
            <li>앰플, 에센스</li>
            <li>로션, 크림</li>
            <li>선케어</li>
            <li>마스크, 팩</li>
            <li>헤어, 바디</li>
            <li>립, 핸드</li>
            <li>페미닌</li>
            <li>향수</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>라인별</Accordion.Header>
        <Accordion.Body>
          <ul onClick={()=>{navigate('/detail/2')}}>
            <li>갈락</li>
            <li>비피다</li>
            <li>퓨어 클렌징</li>
            <li>바닐라 부티크</li>
            <li>온천수</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>브랜드별</Accordion.Header>
        <Accordion.Body>
          <ul onClick={()=>{navigate('/detail/3')}}>
            <li>아워비건</li>
            <li>V콜라겐</li>
            <li>노 머시</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                  </Nav.Link>
                  <Nav.Link onClick={()=>{navigate('/detail/4')}}>비건 뷰티 기획전</Nav.Link>
                  <Nav.Link onClick={()=>{navigate('/detail/5')}}>이벤트</Nav.Link>
                  <Nav.Link onClick={()=>{navigate('/detail/6')}}>특가</Nav.Link>
                  <Nav.Link onClick={()=>{navigate('/detail/7')}}>베스트</Nav.Link>
                  <Nav.Link onClick={()=>{navigate('/detail/8')}}>브랜드</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="비피다 바이옴 콤플렉스 앰플 50ml"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success" style={{width:"40px",height:"40px"}}><svg style={{width:"20px",height:"20px",textAlign:"center",verticalAlign:"middle"}}version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1244.000000pt" height="1280.000000pt" viewBox="0 0 1244.000000 1280.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
fill="#9d2d0b" stroke="none">
<path d="M4025 12789 c-1029 -79 -1969 -501 -2704 -1214 -985 -955 -1456
-2292 -1285 -3650 156 -1244 849 -2360 1899 -3059 193 -129 272 -175 470 -274
452 -227 906 -362 1445 -429 207 -25 763 -25 970 0 404 50 752 138 1115 281
251 98 600 283 819 433 l80 54 1075 -1073 c3835 -3827 3770 -3762 3828 -3795
189 -105 411 -75 563 77 148 148 180 359 84 553 -21 43 -462 488 -2432 2459
-2212 2213 -2404 2408 -2392 2425 8 10 40 47 70 83 714 836 1088 1927 1031
3011 -32 610 -165 1136 -420 1664 -169 349 -340 615 -592 920 -106 128 -395
417 -524 524 -687 569 -1463 900 -2336 996 -174 19 -598 27 -764 14z m780
-949 c777 -118 1453 -463 1982 -1014 516 -536 829 -1194 930 -1951 24 -186 24
-618 0 -810 -54 -416 -158 -758 -342 -1125 -297 -593 -779 -1101 -1360 -1432
-964 -549 -2153 -590 -3152 -108 -975 470 -1667 1364 -1873 2420 -37 192 -51
323 -57 555 -6 258 4 423 42 651 161 971 742 1831 1588 2348 453 278 935 434
1512 490 22 2 164 3 315 1 217 -3 304 -8 415 -25z"/>
</g>
</svg></Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      

      {/* search */}
      <InputGroup className="mb-3 topSearch" id='allInput' style={{marginTop:"50px"}}>
        <Form.Control
          placeholder="New 판테토인 극찐보습"
          aria-label="New 판테토인 극찐보습"
          aria-describedby="basic-addon2"
          id='Forminput'
        />
        <Form.Select aria-label="Default select example">
          <option>전체 카테고리</option>
          <option value="1">비건 뷰티 기획전</option>
          <option value="2">이벤트</option>
          <option value="3">특가</option>
          <option value="4">베스트</option>
          <option value="5">브랜드</option>
        </Form.Select>
        <Button variant="outline-secondary" id="button-addon2" >
        <svg style={{width:"20px",height:"20px",textAlign:"center",verticalAlign:"middle"}}version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1244.000000pt" height="1280.000000pt" viewBox="0 0 1244.000000 1280.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
fill="white" stroke="none">
<path d="M4025 12789 c-1029 -79 -1969 -501 -2704 -1214 -985 -955 -1456
-2292 -1285 -3650 156 -1244 849 -2360 1899 -3059 193 -129 272 -175 470 -274
452 -227 906 -362 1445 -429 207 -25 763 -25 970 0 404 50 752 138 1115 281
251 98 600 283 819 433 l80 54 1075 -1073 c3835 -3827 3770 -3762 3828 -3795
189 -105 411 -75 563 77 148 148 180 359 84 553 -21 43 -462 488 -2432 2459
-2212 2213 -2404 2408 -2392 2425 8 10 40 47 70 83 714 836 1088 1927 1031
3011 -32 610 -165 1136 -420 1664 -169 349 -340 615 -592 920 -106 128 -395
417 -524 524 -687 569 -1463 900 -2336 996 -174 19 -598 27 -764 14z m780
-949 c777 -118 1453 -463 1982 -1014 516 -536 829 -1194 930 -1951 24 -186 24
-618 0 -810 -54 -416 -158 -758 -342 -1125 -297 -593 -779 -1101 -1360 -1432
-964 -549 -2153 -590 -3152 -108 -975 470 -1667 1364 -1873 2420 -37 192 -51
323 -57 555 -6 258 4 423 42 651 161 971 742 1831 1588 2348 453 278 935 434
1512 490 22 2 164 3 315 1 217 -3 304 -8 415 -25z"/>
</g>
</svg>
        </Button>
      </InputGroup>

      <Routes>

        <Route path="/" element={<Home cosmetic={cosmetic} setCosmetic={setCosmetic} res={res} setRes={setRes} navigate={navigate} btn={btn} setBtn={setBtn}></Home>}>
        </Route>

        <Route path="/detail/:id" element={<Detail cosmetic={cosmetic} res={res} setRes={setRes} navigate={navigate}></Detail>}></Route>

        <Route path="/cart" element={<Cart></Cart>}></Route>

        <Route path="/Login" element={<Login></Login>}></Route>

        <Route path="*" element={<div style={{width:"60%",height:"200px",border:"2px dashed darkred",margin:"0 auto",textAlign:"center",fontSize:"25px",marginBottom:"60px",marginTop:"60px",color:"darkred",display:"flex",alignItems:"center",justifyContent:'center'}}>존재하지 않는 페이지입니다. &nbsp;

        <Link to='/' style={{border:"2px solid darkred",fontSize:"16px",padding:"2px 4px",color:"darkred"}}>돌아가기</Link>
        </div>}></Route>
        
      </Routes>

   <Container style={{background:"white" ,maxWidth:"100vw",borderTop:"3px solid darkred"}}>
   <Row sm={1}md={2}lg={4} style={{padding:"20px"}}>
        <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="1">
          <Accordion.Header>개인정보 처리 방침</Accordion.Header>
          <Accordion.Body>
          (주)마녀공장은(이하 '회사'는) 고객님의 개인 정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인 정보 처리 방침을 수립·공개하며, 본 개인 정보 처리 방침을 홈페이지 첫 화면에 공개함으로써 이용자들이 언제나 용이하게 보실 수 있도록 조치하고 있습니다. 개인 정보 처리 방침은 정부의 법률 및 지침 변경이나 회사의 내부 방침 변경 등으로 인하여 수시로 변경될 수 있고, 이에 따른 개인 정보 처리 방침의 지속적인 개선을 위하여 필요한 절차를 정하고 있습니다. 이용자들께서는 사이트 방문 시 수시로 확인하시기 바랍니다.
          <br/><br/>
          (주)마녀공장의 개인 정보 처리 방침은 다음과 같은 내용을 담고 있습니다.<br/>
          - 개인 정보 수집에 대한 동의<br/>
          - 수집하는 개인 정보 항목 및 수집 방법<br/>
          - 개인 정보의 수집 및 이용목적<br/>
          - 수집하는 개인 정보의 보유 및 이용 기간<br/>
          - 개인정보의 파기 절차 및 방법<br/>
          - 수집한 개인 정보의 공유 및 제공<br/>
          - 이용자 자신의 개인 정보 관리(열람, 정정, 삭제 등)에 관한 사항<br/>
          - 쿠키(Cookie)의 운용 및 거부<br/>
          - 개인 정보의 위탁처리<br/>
          - 개인 정보보호를 위한 기술적/관리적 대책<br/>
          - 개인 정보 관련 의견수렴 및 불만 처리에 관한 사항<br/>
          - 개인 정보 보호 책임자 및 담당자의 소속-성명 및 연락처<br/>
          - 이용자 및 법정대리인의 권리와 그 행사방법<br/>
          - 권익 침해 구제방법<br/>
          - 고지의 의무<br/>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="1">
          <Accordion.Header>마일리지 제도</Accordion.Header>
          <Accordion.Body>
          ① 저희 마녀공장은 마일리지를 사용할 수 있습니다.<br/>
          ② 마일리지 100P는 현금 100원과 같습니다.<br/>
          ③ 마일리지는 100P 이상 되어야 사용하실 수 있고, 보유하고 있는 쿠폰과 마일리지는 동시 사용이 가능합니다.<br/>
          ④ 마일리지는 지급일로부터 1년의 사용기한이 있습니다.
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="1">
          <Accordion.Header>상품 주문 방법</Accordion.Header>
          <Accordion.Body>
          저희마녀공장에서 상품을 주문하는 방법은 크게 6단계입니다.<br/>
          ① 상품검색<br/>
          ② 장바구니에 담기<br/>
          ③ 회원ID 로그인 또는 비회원 주문<br/>
          ④ 주문서 작성<br/>
          ⑤ 결제방법 선택 및 결제<br/>
          ⑥ 주문 성공 화면 (주문번호)<br/>
          ⑦ 비회원 주문인 경우 6단계에서 주문번호와 승인번호(카드결제시)를 꼭 메모해 두시기 바랍니다.<br/>
          ※ 단, 회원인 경우 자동 저장되므로 따로 관리하실 필요가 없습니다.
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="1">
          <Accordion.Header>사업자 정보</Accordion.Header>
          <Accordion.Body>
            <div>
            대표이사: 유근직 &nbsp;/&nbsp; 주소: 서울특별시 강서구 공항대로 518&nbsp;/&nbsp; 마녀공장사업자등록번호: 108-86-00365&nbsp;/&nbsp;사업자번호조회
            통신판매업신고번호: 2022-서울강서-3344&nbsp;/&nbsp;개인정보관리자: 최진호&nbsp;/&nbsp;메일: manyofactory_cs@manyo.co.kr&nbsp;/&nbsp;고객센터: 02-6013-0855&nbsp;/&nbsp;팩스번호: 02-6280-0829
            </div>
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </Row>
   </Container>
   <Container><Row>
        <Col xs={12} md={6} style={{textAlign:"center"}}><img src='https://www.manyo.co.kr/data/skin/manyo/images/design/logo.png' width="100px" alt='img'/>
        <p>© Ma:nyo 2023. Made with  by geunyoung Kim.</p>
        </Col>
        <Col xs={12} md={6} style={{textAlign:"center"}}><img src='https://wokiee.jamstacktemplates.dev/assets/images/no-placeholder/payment.jpg' alt='img'/></Col>
      </Row>
    </Container>
    </>
  );
}

export default App;