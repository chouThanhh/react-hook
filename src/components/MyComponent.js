// class component
// function component
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, name: "Hoi Dan IT", age: "16" },
//             { id: 2, name: "Eric", age: "26" },
//             { id: 3, name: "HarryPhamDev", age: "69" }
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         // let listUsersNew = this.state.listUsers;
//         // listUsersNew.unshift(userObj);
//         // console.log('Check: ', listUsersNew)
//         // this.setState({
//         //     listUsers: listUsersNew
//         // })

//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//             // listUsers: [...this.state.listUsers, userObj]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId)
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }

//     //JSX
//     render() {

//         //DRY: don't repeat yourself

//         return (
//             <>
//                 <br />
//                 <div className="a">
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br /> <br />

//                     <DisplayInfor
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />

//                 </div>
//                 <div className="b">

//                 </div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {

    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "Hoi Dan IT", age: "16" },
            { id: 2, name: "Eric", age: "26" },
            { id: 3, name: "HarryPhamDev", age: "69" }
        ]
    )


    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
        // this.setState({
        //     listUsers: [userObj, ...this.state.listUsers]
        //     // listUsers: [...this.state.listUsers, userObj]
        // })
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUsers(listUsersClone)

        // this.setState({
        //     listUsers: listUsersClone
        // })
    }
    return (
        <>
            <br />
            <div className="a">
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
                <br /> <br />

                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />

            </div>
            <div className="b">

            </div>
        </>
    )
}

export default MyComponent;