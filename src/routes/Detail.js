import { useState } from 'react';
import { Container,Row,Col,Button,Nav,Table} from 'react-bootstrap';
import { useParams,useNavigate } from 'react-router-dom';

function Detail(props){
  let {id}=useParams();
  let selproduct=props.cosmetic.find((x)=>x.id==id);
  let navigate=useNavigate();
  let [tab,setTab]=useState(0);

  return(
    <>
      <div style={{background:"darkred",textAlign:'center',color:"white",width:"100%",height:"30px",fontSize:"20px",marginBottom:"60px"}}>
        제품상세
      </div>
      <Container style={{marginBottom:"60px"}}>
      <Row xs={1} sm={1} md={2}  style={{marginBottom:"60px"}}>
        <Col style={{textAlign:'center'}}>
          <img src={selproduct.imgUrl} alt="product"></img>
        </Col>
        <Col >
          <p style={{color:"darkred",fontSize:"25px",fontWeight:"bold"}}>{selproduct.title}</p>
          <p style={{fontSize:"16px"}}>{selproduct.text1}</p>
          <p style={{fontSize:"25px",fontWeight:"bold"}}>{selproduct.price}원&nbsp;&nbsp;<span style={{color:"#ccc",fontSize:"16px",textDecoration:"line-through"}}>{selproduct.content}원</span></p>
          <table style={{fontSize:"16px"}}>
            <tr>
              <th style={{width:"30%"}}>전성분</th><td>보러가기</td>
            </tr>
            <tr>
              <th>제조일자</th><td>2022.06.11</td>
            </tr>
            <tr>
              <th>사용기한</th><td>제조일로부터 2년, 개봉 후 1년</td>
            </tr>
          </table>
          <hr style={{borderBottom:"2px solid darkred"}}></hr>
          <div style={{display:"flex"}} id="shopbtn1">
            <Button variant="outline-danger" onClick={()=>{navigate('/cart')}} >▷ 장바구니 추가</Button>{' '}
            <Button variant="outline-danger">♡ 위시리스트 추가</Button>{' '}
            <Button variant="outline-danger">+ 바로구매</Button>{' '}
          </div>
        </Col>
      </Row>
      <div style={{background:'#fbf4d7',height:"40px",justifyContent:'center',color:"darkred",fontSize:"18px",alignItems:"center",display:"flex",marginBottom:"10px"}}>+ 마녀공장X올리브영 리뷰 쓰면 5천원 상품권 증정 +</div>
      <div style={{background:'darkred',height:"40px",justifyContent:'center',color:"white",fontSize:"18px",alignItems:"center",display:"flex"}}>♥ 회원가입시 무료배송 + 3000원 웰컴 쿠폰 증정 ♥</div>
      <hr style={{borderBottom:"2px solid darkred"}}></hr>
      
      <Nav variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link onClick={()=>{setTab(0)}}>제품상세</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{setTab(1)}}>배송/반품 안내</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{setTab(2)}}>제품후기</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{setTab(3)}}>문의</Nav.Link>
      </Nav.Item>
      </Nav>

      <TabContent tab={tab} selproduct={selproduct}/>
        
      </Container>
      
    </>
  )
}

function TabContent(props){

  return [ 
  <div>
    <Row sm={1} md={1}>
    <Col>
      <img src={props.selproduct.intro} alt="intro" style={{width:"100%"}}></img>
    </Col>
    </Row>
  </div>, 
  <div>
    <p style={{marginTop:"20px",fontSize:'20px',color:'darkred',fontFamily: 'SBAggroB'}}>배송안내</p>
    <Table  bordered style={{border:"1px solid darkred",color:"darkred"}}>
      <tbody >
        <tr>
          <th style={{width:"15%"}}>배송업체</th>
          <td>CJ대한통운</td>
        </tr>
        <tr>
          <th>배송비</th>
          <td>2,500원(단, 실결제금액 2만원 이상은 무료배송)<br></br>
          *배송비는 한번에 결제하신 동일 주문번호, 동일 배송지 기준으로 부과됩니다
          </td>
        </tr>
        <tr>
          <th>배송안내</th>
          <td>
        - 영업일 기준 오후 2시 이전 입금 확인분에 한해 당일 출고됩니다(주말 및 월, 화 주문건 제외)<br/>
        - 월요일, 화요일 주문건은 주말 배송물량이 많아 주문일로부터 1~2일내 순차 출고 됩니다<br/>
        - 이벤트 진행으로 주문건 증가 시 모든 주문건 순차적으로 출고됩니다<br/>
        - 결제 완료 후 평일 기준 평균 2~3일정도 이내에 배송되며 (산간지역 제외), 주말/공휴일/명절 연휴가 포함되거나 택배사 사정으로 인해 배송소요 시일은 달라질 수 있습니다<br/>
        - 제품 발송이 진행된 이후에는 교환/취소/주소 변경이 어려우며, 발송 후 변경사항이 있을 경우에는 왕복 택배비는 5,000원이 발생됩니다<br/>
        - 주문 접수 후 1일 이내에 입금이 확인되지 않는 경우 자동으로 주문취소가 됩니다
        - 샘플북과 일반 주문건의 합배송은 어렵습니다<br/>
        - 사은품 변경 및 샘플 임의 추가는 어려운 점 양해 부탁드립니다</td>
        </tr>
      </tbody>
    </Table>
    <p style={{marginTop:"20px",fontSize:'20px',color:'darkred',fontFamily: 'SBAggroB'}}>반품/교환안내</p>
    <Table  bordered style={{marginTop:"20px",border:"1px solid darkred",color:"darkred"}}>
      <tbody >
        <tr>
          <th style={{width:"15%"}}>교환/환불절차</th>
          <td>
1.마녀공장 고객센터나 홈페이지 1:1문의 게시판을 통해 접수<br/>
2.당사로부터 전화 답신이나 게시판 답변을 확인 (비용, 주소, 방법 및 절차 등을 안내)<br/>
3.반품접수 후 영업일 기준 2~3일 이내에 자사 지정 택배기사님이 직접 방문 수거<br/>
4.제품 도착 후 마녀공장 환불 규정에 따라 7일 이내 순차적 처리됩니다</td>
        </tr>
        <tr>
          <th>환불방법</th>
          <td>반품 및 환불 접수된 상품이 정상적으로 회수 완료된 경우 아래와 같은 절차로 처리됩니다<br/>
- 무통장입금 : 고객님께서 남겨주신 계좌로 입금해드립니다<br/>
- 신용카드 결제 : 카드 결제 취소처리 해드리며, 처리 완료 후 카드사 사정에 따라 3~7일 후 승인취소 확인 될 수 있습니다(취소 내역 확인은 이용하신 카드사로 문의주시면 정확한 안내 받으실 수 있습니다)<br/>
- 적립금 결제 : 고객님 아이디의 적립금으로 환원됩니다<br/>
- 휴대폰 결제 : 결제 달 이내라면 결제 취소처리 가능하나, 다음 달로 넘어가게되는 경우 휴대폰 요금이 이미 납부처리되어 승인취소가 불가하여 남겨주시는 계좌로 입금해드립니다
          </td>
        </tr>
        <tr>
          <th>반품/교환 철회</th>
          <td>
교환, 반품을 요청하였으나 철회하고자 할 경우에는 당사 고객센터(02-6013-0855)나 1:1문의게시판으로 문의해주시면 신속하게 처리해드립니다</td>
        </tr>
        <tr>
          <th>반품/교환 가능 시점</th>
          <td>반품 및 환불 접수된 상품이 정상적으로 회수 완료된 경우 아래와 같은 절차로 처리됩니다<br/>
- 상품을 사용하지 않았거나 포장을 훼손하지 않은 경우, 7일 이내에 반품 신청 가능합니다<br/>
- 상품 파손 및 오배송의 경우<br/>
- 제품 사용 후 부작용이 생긴 경우<br/>
- 내용물이 2/3이상 남은 경우에 한해, 증상이 나타난 사진이나 진단서 첨부 시 (진료비 및 약제등은 지원되지 않습니다)<br/>
- 상품 불량 및 트러블로인한 교환 및 반품(환불)은 전자상거래법에 의거, 주문 날짜로부터 30일이 지나면 반품 및 환불이 불가능합니다</td>
        </tr>
        <tr>
          <th>반품/교환 불가 사유</th>
          <td>
          - 제품 포장 손상 또는 개봉 및 사용한 경우<br/>
- 배송일로 부터 7일이 경과된 경우<br/>
- 마녀공장 공식 판매처에서 구입한 제품이 아니거나, 구매내역이 확인되지 않는 경우(공식판매처의 경우, 소비자 상담관련 전화번호가 마녀공장 대표번호 02-6013-0855로 확인됩니다)<br/>
- 고객님의 부주의로 제품이 파손 및 손상된 경우<br/>
- 제품 파손 및 손상이 없는 화장소품은 불가<br/>
- 제품의 겉포장이 손상되거나 분실한 경우<br/>
- 부작용으로 인한 교환 및 반품 요청 시 피부과 진단서가 제출되지 않은 경우<br/>
- 부작용으로 인한 교환 및 반품 요청 시 배송일로 부터 20일이 지난 경우<br/>
- 왕복 배송비 5,000원이 동봉되지 않은 경우
          </td>
        </tr>
        <tr>
          <th>반품/교환 택배비</th>
          <td>반품/교환 또는 무료배송 시 왕복 배송비 5,000원<br/>
상품 불량 및 오배송 등의 이유로 반품하실 경우, 반품 배송비는 무료입니다<br/>
단순변심 및 고객님의 사정으로 반품/교환 하실 경우 배송비는 고객님 부담입니다
          </td>
        </tr>
        <tr>
          <th>신청방법</th>
          <td>반드시 마녀공장 1:1문의게시판이나 고객센터 (02-6013-0855)로 접수해주세요<br/>
교환, 반품, 환불은 공정거래위원회의 표준약관에 의거하여 제품이 배송일로부터 7일이내에 교환 및 환불이 가능합니다
          </td>
        </tr>
      </tbody>
    </Table>
  </div>, 
  <div>
    내용2
  </div>,
  <div>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"3px solid darkred"}}><p style={{marginTop:"20px",fontSize:'20px',color:'darkred',fontFamily: 'SBAggroB'}}>제품문의</p><button style={{background:"darkred",color:"white",fontSize:"16px",border:"none",height:"40px",borderRadius:"5px",padding:"0px 10px"}} onClick={()=>{alert("로그인 후 이용이 가능합니다.");}}>문의하기</button></div>

    <div style={{borderBottom:"1px solid darkred",height:"80px",display:"flex",flexWrap:"wrap",alignContent:"center",color:"darkred"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:'10px'}}><p>비밀글입니다</p><p onClick={()=>{alert("로그인 후 이용이 가능합니다.");}}>내용보기</p></div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}><p>답변완료</p><p>sish***2023.03.13</p></div>
    </div>
    <div style={{borderBottom:"1px solid darkred",height:"80px",display:"flex",flexWrap:"wrap",alignContent:"center",color:"darkred"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:'10px'}}><p>비밀글입니다</p><p onClick={()=>{alert("로그인 후 이용이 가능합니다.");}}>내용보기</p></div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}><p>답변완료</p><p>dsdg***2023.02.28</p></div>
    </div>
    <div style={{borderBottom:"1px solid darkred",height:"80px",display:"flex",flexWrap:"wrap",alignContent:"center",color:"darkred"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:'10px'}}><p>비밀글입니다</p><p onClick={()=>{alert("로그인 후 이용이 가능합니다.");}}>내용보기</p></div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}><p>답변완료</p><p>sfsd***2023.01.19</p></div>
    </div>
  </div>]
  [props.tab]
  
  }


export default Detail;
