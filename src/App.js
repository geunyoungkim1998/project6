import {Button,Container,Form,Nav,Navbar,NavDropdown,Offcanvas,Dropdown,InputGroup,SplitButton,Carousel,Row,Col} from 'react-bootstrap';
import './App.css';

// https://preview.themeforest.net/item/ecolife-multipurpose-ecommerce-html-template/full_screen_preview/27418907?_ga=2.234899529.914488396.1658728789-1128965468.1658728789&_gac=1.208849446.1658730697.EAIaIQobChMIi8nuq7WT-QIV1GSLCh2JqArxEAMYAyAAEgKPbvD_BwE

function App() {
  return (
    <>
      {/* nav bar */}
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img src='https://www.manyo.co.kr/data/skin/manyo/images/design/logo.png' width='160px'/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">전체 카테고리</Nav.Link>
                  <Nav.Link href="#action2">비건 뷰티 기획전</Nav.Link>
                  <Nav.Link href="#action3">이벤트</Nav.Link>
                  <Nav.Link href="#action4">특가</Nav.Link>
                  <Nav.Link href="#action5">베스트</Nav.Link>
                  <Nav.Link href="#action6">브랜드</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      {/* search */}
      <InputGroup className="mb-3 topSearch" id='allInput'>
        <Form.Control
          placeholder="Search entire store here..."
          aria-label="Search entire store here..."
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
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>

      {/* slide */}
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/slide2.jpg"
          alt="First slide"
          height='600px'
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/slide4.jpg"
          alt="Second slide"
          height='600px'
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/slide1.jpg"
          alt="Third slide"
          height='600px'
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* 안내사항 */}
    <Container id='alamContainer'>
      <Row xs={1} md={2}>
        <Col className='container1'><img src='https://htmldemo.net/ecolife/ecolife/assets/images/icons/static-icons-1.png'></img>
        <div>
          <h6>무료배송</h6>
          <p>50,000 이상 구매시 무료배송</p>
        </div>
        </Col>
        <Col className='container1'><img src='https://htmldemo.net/ecolife/ecolife/assets/images/icons/static-icons-2.png'></img>
        <div>
          <h6>무료교환</h6>
          <p>수령 후 7일 이내에 교환 시 무료교환</p>
        </div>
        </Col>
        <Col className='container1'><img src='https://htmldemo.net/ecolife/ecolife/assets/images/icons/static-icons-3.png'></img>
        <div>
          <h6>100% 결제 안전 보장</h6>
          <p>결제 정보를 안전하게 보호합니다</p>
        </div>
        </Col>
        <Col className='container1'><img src='https://htmldemo.net/ecolife/ecolife/assets/images/icons/static-icons-4.png'></img>
        <div>
          <h6>24시 상담</h6>
          <p>7일 24시간 상담운영</p>
        </div>
        </Col>
      </Row>
    </Container>

    {/* 상품이미지 */}
    <Container>
        <div id='Product1'>
          <div>
            <Row>
              <Col md={6}><img src='img/slide9.jpg' width='200%'></img></Col>
            </Row>
          </div>
          <div>
            <Row>
              <div style={{overflow:'hidden'}}><Col md={6} className='imghover'><img src='img/slide7.jpg' width='200%' style={{marginBottom:"3%"}}></img></Col></div>
              <div style={{overflow:'hidden'}}>
              <Col md={6} className='imghover'><img src='img/slide6.jpg' width='200%'></img></Col>
              </div>
            </Row>
          </div>
        </div>
    </Container>
    </>
  );
}

export default App;