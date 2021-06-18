import styled from "styled-components";
import PostModal from "./PostModal";
import {useState} from "react";

const Main = (props) => {
        const [showModal,setShowModal]=useState("close");
        const handleClick=(e)=>{
            e.preventDefault();
            if(e.target!==e.currentTarget){
                return;
            }
            switch(showModal){
                case 'open':
                setShowModal('close');
                break;
                case 'close':
                setShowModal('open');
                break;
                default:
                setShowModal('close');
                break;
            }
        };
  return(
       <Container>
           <ShareBox>Share
    <div>
      <img src="/images/user.svg" alt=""/>
      <button onclick={handleClick}>Start a post</button>
      </div>
      <div>
    <button>
      <img src="/images/photo.PNG" alt=""/>
      <span>Photo</span>
    </button>

    <button>
    <img src="/images/video.PNG" alt=""/>
        <span>Video</span>
    </button>
    <button>
        <img src="/images/Calen.PNG" alt=""/>
        <span>Event</span>
    </button>
    <button>
        <img src="/images/news.PNG" alt=""/>
        <span>Article</span>
    </button>
    </div>
   </ShareBox>
   <div>
       <Article><SharedActor>
           <a href>
               <img src="/images/user.svg"  alt=" "/>
               <div>
                   <p>
                   <span>Title</span> </p>
                   <p> <span>Info</span> </p>
                   <p> <span> Date</span> </p>
                  
               </div>
           </a>
           <button>
               <img src="/images/menu.PNG" alt=" "/>
           </button>
           </SharedActor>
           <Description>Description</Description>
           <SharedImg>
               <a>
                   <img src="/images/help.PNG" alt=""></img>
                   </a>
           </SharedImg>
           <SocialCounts>
                   
                    <button>
                           <img src="/images/likes.PNG" alt=" "/>
                          
                           <img src="/images/share.PNG" alt=" "/>
                           <img src="/images/heart.PNG" alt=" "/>
                           <img src="/images/e.PNG" alt=" "/>
                           
                       </button>
                       
        </SocialCounts>
        <SocialActions>
        <button>
            <img src="/images/Like1.PNG" alt=""></img>

        </button>
        <button>
            <img src="/images/Comment.PNG" alt=""></img>
    
        </button>
        <button>
            <img src="/images/share2.PNG" alt=""></img>
    
        </button>
        <button>
            <img src="/images/send.PNG" alt=""></img>
    
        </button>
        </SocialActions>
     </Article>
    </div>
    <div>
       <Article><SharedActor>
           <a>
               <img src="/images/user.svg"  alt=" "/>
               <div>
                   <p>
                   <span>Title</span> </p>
                   <p> <span>Info</span> </p>
                   <p> <span> Date</span> </p>
                  
               </div>
           </a>
           <button>
               <img src="/images/menu.PNG" alt=" "/>
           </button>
           </SharedActor>
           <Description>Description</Description>
           <SharedImg>
               <a>
                   <img src="/images/help.PNG" alt=""></img>
                   </a>
           </SharedImg>
           <SocialCounts>
                   
                    <button>
                           <img src="/images/likes.PNG" alt=" "/>
                          
                           <img src="/images/share.PNG" alt=" "/>
                           <img src="/images/heart.PNG" alt=" "/>
                           <img src="/images/e.PNG" alt=" "/>
                           
                       </button>
                       
        </SocialCounts>
        <SocialActions>
        <button>
            <img src="/images/Like1.PNG" alt=""></img>

        </button>
        <button>
            <img src="/images/Comment.PNG" alt=""></img>
    
        </button>
        <button>
            <img src="/images/share2.PNG" alt=""></img>
    
        </button>
        <button>
            <img src="/images/send.PNG" alt=""></img>
    
        </button>
        </SocialActions>
     </Article>
    </div>
    <PostModal showModal={showModal} handleClick={handleClick}/>
  </Container>
  );
};
const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align:center;
  overflow:hidden;
  margin-bottom:8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const ShareBox = styled(CommonCard)` 
  display:flex;
  flex-direction:column;
  color: #958b7b;
  margin:0 0 8px;
  background:white;
  div{
      button{
          outline:none;
          color:rgba(0,0,0,0.6);
          font-size:14px;
          line-height:1.5;
          min-height:48px;
          background:transparent;
          border:none;
          display:flex;
          align-items:center;
          font-weight:600;
      }
       &:first-child{
          display:flex;
          align-items:center;
          padding:8px 16px 0px 16px;
          img{
              width:48px;
              border-radius:50%;
              margin-right:8px;
          }
          button{
              margin:4px 0;
              flex-grow:1;
              border-radius:35px;
              padding-left:16px;
              border:1px solid rgba(0,0,0,0.15);
              border-radius:35px;
              background-color:white;
              text-align:left;
          }
      }
      &:nth-child(2){
          display:flex;
          flex-wrap:wrap;
          justify-content:space-around;
          padding-bottom:4px;

      button{
          img{
              margin:0 4px 0 -2px;
          }
          spam{
              color:#70b5f9;
          }
      }
      }
  }
  `;
const Article=styled(CommonCard)`
 padding:0;
 margin:0 0 0px;
 overflow:visible;
`;

const SharedActor=styled.div`
padding-right:40px;
flex-wrap:nowrap;
padding:12px 16px 0;
margin-bottom:8px;
align-items:center;
display:flex;
a{
    margin-right:12px;
    flex-grow:1;
    overflow:hidden;
    display:flex;
    text-decoration:none;
    img{
        width:48px;
        height:48px;
    }
    a>div{
        display:flex;
        flex-direction:column;
        flex-grow:1;
        flex-basis:0;
        margin-left:8px;
        overflow:hidden;
        span{
            text-align:left;
            &:first-child{
                font-size:14px;
               
                font-weight:700;
                color:rgba(0,0,0,1);
            }
            &:nth-child(n+1){
                font-size:12px;
                color:rgba(0,0,0,0.6);
            }
        }
  }
  } 
button{
    position:absolute;
    right:12px;
    top:0;
    background:transparent;
    border:none;
    outline:none;
    a{
    margin-right:12px;
    flex-grow:1;
    overflow:hidden;
    display:flex;
    text-decoration:none;
    }
}
`;
const Description=styled.div`
padding:0 16px;
overflow:hidden;
color:rgba(0,0,0,0.9);
font-size:14px;
text-align:left;
`;
const SharedImg=styled.div`
margin-top:8px;
width:100%;
display:block;
position:relative;
background-color:#f9fafb;

img{
    object-fit:contain;
    width:100%;
    height:100%;
}
`;
const SocialCounts=styled.ul`
line-height:1.3;
display:flex;
align-items:flex-start;
overflow:auto;
margin:0 10px;
padding:8px 0;
border-bottom:1px solid #e9e5df;
list-style:none;
li{
    margin-right:5px;
    margin-top:7px;
    font-size:12px;
    button{
        display:flex;
    }
}
`;
const SocialActions=styled.ul`
align-items:center;
display:flex;
justify-content:flex-start;
margin:0;
min-height:40px;

button{
display:inline-flex;
align-items:center;
padding:8px;
color:#0a66c2;
@media (min-width:768px){
    margin-left:4px;
}
}
`;
export default Main;