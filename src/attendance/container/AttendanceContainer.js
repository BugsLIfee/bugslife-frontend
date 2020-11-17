import React, {  PureComponent } from 'react'
import Attendancecalender from '../view/AttendanceCalender'
import "../view/scss/calendar.scss"
import { inject, observer } from "mobx-react"
import { ToastContainer, toast, collapseToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

@inject("Store")
@observer
 class Attendancecontainer extends PureComponent {

    onClickBtn=(user_id)=>{
        let {error} = this.props.Store.attendance;
        console.log("error : " + error)
        let today = new Date();   

        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜
        
        let newDate = `${year}-${month}-${date}`

        // console.log(newDate, user_id)
        // console.log(this.state)
        this.props.Store.attendance.addAttn(user_id,newDate)

        if(error.length!==0){
            toast.error(error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else{
            toast.info('출석완료 🎊', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        };

        window.location.reload();

    }


    componentDidMount=()=>{
        this.props.Store.attendance.getAllList()
    }
   
    render() {
        let {allList} = this.props.Store.attendance;

        let userInfo = this.props.Store.oauth.currentUser;
        let uid = userInfo.id;
        let done = userInfo.isAttend;


        console.log("isDone = ? " ,done)
        let filterList;

        if(uid!==undefined){
            filterList = allList.filter(val=> {return(val.uid=== uid)})
            // console.log("필터 리스트" , filterList)
        }


        return (
            <div className="attn_wrap">
               
                <div className="attn_img">
                    <img src="../../banner/attendance_banner.001.png" alt="attantance_banner_img" />
                    <div className="attn_img_txt">
                        <h5>
                            벅스라이프에 <strong>매일매일 </strong>출석체크하면
                        </h5>
                        <h5>
                            <i id="coin" className="fas fa-coins"></i>포인트가 차곡차곡!
                        </h5>
                    </div>

                </div>
           
                <div className="attn_info">
                    <div className="attn_info_container"> 
                        <h2> [ 출석체크 혜택 ] </h2>
                        <div className="attn_info_content">

                            <div className="attn_goal">
                                <h3> <span>3일</span> 출석달성</h3>
                                <h1> <i className="fas fa-check"></i> </h1>
                                <h5> +100 포인트 추가지급</h5>
                            </div>
                            <div className="attn_goal">
                                <h3><span>1주일</span> 출석달성</h3>
                                <h1> <i class="fas fa-check"></i> </h1>
                                <h5> +500 포인트 추가지급</h5>
                            </div>
                            <div className="attn_goal">
                                <h3><span>1개월</span> 출석달성</h3>
                                <h1> <i class="fas fa-check"></i> </h1>
                                <h5> +1000 포인트 추가지급</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="attn_btn">
                    {done===true? 
                    (<button className="attn_btn_disabled" disabled="true">
                        <h2>출첵완료!</h2>
                    </button>)
                    
                    : 
                    (<button className = "attn_btn_" onClick={()=>this.onClickBtn(uid)} disabled={done===true? true: false}> 
                         <h2> 출석체크! </h2>
                    </button>)
                    }
               
                     
                     <ToastContainer 
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover />
                </div>
                <hr />

                <div className="attn_cal">
                    <Attendancecalender attendance={filterList}/></div>
                </div>
        )
    }
}

export default Attendancecontainer;