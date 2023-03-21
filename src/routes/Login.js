import $ from 'jquery';
import {Nav} from 'react-bootstrap';
import React from 'react';


function Login(){
    return(
        <>
        <div style={{background:"darkred",textAlign:'center',color:"white",width:"100%",height:"30px",fontSize:"20px",marginBottom:"20px"}}>
         &nbsp;
      </div>
            <div className="titlefont">로그인</div>
            <div style={{display:"flex",justifyContent:"center"}}>

                <div style={{border:"2px dashed darkred",width:"70%",height:"300px",padding:"20px",marginBottom:"60px",color:"darkred",textAlign:"center",borderRadius:"20px"}}>

                <Nav fill variant="tabs" defaultActiveKey="/Login">
            <Nav.Item>
                <Nav.Link style={{border:"2px solid darkred",color:"white",background:"darkred",borderRadius:"10px 10px 0px 0px"}} className="loginbtn">회원</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{border:"2px solid darkred",borderRadius:"10px 10px 0px 0px"}} className="loginbtn" >비회원</Nav.Link>
            </Nav.Item>
            </Nav>
                    ID : <input type='text' id='inputid' style={{border:"2px solid darkred",width:"200px",height:"35px",borderRadius:"17.5px",paddingLeft:"20px",margin:"40px 10px 10px 10px"}}></input><br/>

                    PW : <input type='password' id='password' style={{border:"2px solid darkred",width:"200px",height:"35px",borderRadius:"17.5px",paddingLeft:"20px",margin:"10px"}}></input><br/>

                    <button style={{border:"2px solid darkred",background:"white",borderRadius:"17.5px",height:"35px",width:"100px",color:"darkred",margin:"10px 2px"}}>회원가입</button>
                    <button style={{border:"2px solid darkred",background:"white",borderRadius:"17.5px",height:"35px",width:"100px",color:"darkred",margin:"10px 2px"}} onClick={chkPW}>로그인</button>
                </div>
            </div>
        </>
    )
}

function chkPW(){
    var pw=$("#password").val();
    var num=pw.search(/[0-9]/g);
    var eng=pw.search(/[a-z]/ig);
    var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    if(pw.length<8||pw.length>20){
        alert("8자리~20자리 이내로 입력해주세요.");
        return false;
    }else if(pw.search(/\s/)!=-1){
        alert("비밀번호는 공백 없이 입력해주세요.");
        return false;
    }else if(num<0||eng<0||spe<0){
        alert("영문, 숫자, 특수문자를 혼합하여 입력해주세요.");
        return false;
    }else{
        alert("로그인되었습니다.")
        console.log("통과");
        return true;
    }
}


export default Login;

