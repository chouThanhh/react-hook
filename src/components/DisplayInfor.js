import React, { useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

//stateless vs stateful
// class DisplayInfor extends React.Component {

//     render() {
//         console.log(">>> call me render")
//         //destructing array/object
//         const { listUsers } = this.props; //object
//         // const listUsers = this.props.listUsers
//         //props => vt tắt properties

//         //template + logic js
//         return (
//             <div className="display-infor-container">

//                 {true &&
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         <div>My name's {user.name}</div>
//                                         <div>My age's {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props; //object

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    // this.state = {
    //     isShowHideListUser: true
    // }
    const handleShowHideListUser = () => {

        //this.setState({
        // isShowHideListUser: true
        //})
        setShowHideListUser(!isShowHideListUser);
    }

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hidel list users" : "Show List users"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )

}

export default DisplayInfor;