import "../../style/Adminstyle/userList.css"
import { LineStyle, Timeline, PersonSharp, Event, Web } from "@material-ui/icons"
import {Nav, Button} from "react-bootstrap";
import { NotificationImportantSharp, Language, Settings, DeleteForever, Update } from '@material-ui/icons';
import {useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';


export default function UserList() {

const [users, setUser] = useState([]);

// fetch all concerts from data
useEffect(() => {
  //setConcerts(true);
  const getUsers = () => {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:3030/auth", {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => setUser(result))
      .catch(error => console.log('error', error));
  }
  getUsers()
    // console.log(concerts)
    //.then(setConcerts(false));

}, []);
const navigate = useNavigate();
const getRole = () => {
  if (localStorage.getItem('role') === "0")
  navigate("/");
}
getRole()


  return (
      <div>
        <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft"><span>LOGO SHOW TIME</span></div>
            <div className="topRight">
                <div className="topbarIconContainer">

                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">

                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">

                </div>
                <img src="" className='topAvatar'/>
            </div>
        </div>
    </div>
    <div className="main">
    <div className="AdminSideBar1">
       <div className="sidebarWrapper1">
         <div className="sidebarMenu1">
           <h3 className="sidebarTitle1">
             Dashboard
            </h3>
            <ul className="sidebarList1">
              <li className="sidebartListItem1">
              <Nav.Link href="/">Website</Nav.Link>
              </li>
              <li className="sidebartListItem1">
              <Nav.Link href="/admin">Analytics</Nav.Link>
              </li>
            </ul>
              <h3 className="sidebarTitle1">
                Management
              </h3>
            <ul className="sidebarList1">
              <li className="sidebartListItem1">
              <Nav.Link href="/admin/users">Users</Nav.Link>
              </li>
              <li className="sidebartListItem1">
             <Nav.Link href="/admin/concerts">Events</Nav.Link>
              </li>
            </ul>
         </div>
       </div>

    </div>
      <div className="userList">
      <div className="allUsers">
    <div className="List">
      <h3 className="alluTitle">Users List</h3>
      <Button className="createuser"><Link to={{pathname: '/admin/users/create'}}>Create a User</Link></Button>
      <table className="alluTable">
        <tr className="alluTr">
          <th className="alluTh">Fist Name</th>
          <th className="alluTh">Last Name</th>
          <th className="alluTh">Password</th>
          <th className="alluTh">Email</th>
          <th className="alluTh">Phone Number</th>
          <th className="alluTh">Role</th>
          <th className="alluTh">ID</th>
          <th className="alluTh">Update</th>
          <th className="alluTh">Delete</th>
        </tr>
        <tr className="widgetLgTr">
            <td className="UserFn">{users.map((user : any)=>{
            return <p key={user.id}>{ user.firstName }</p>
            } )}</td>
            <td className="UserLn">{users.map((user : any)=>{
            return <p key={user.id}>{ user.lastName }</p>
            } )}</td>
            <td className="UserPass">{users.map((user : any)=>{
            return <p key={user.id}>{ user.password }</p>
            } )}</td>
            <td className="UserEmail">{users.map((user : any)=>{
            return <p key={user.id}>{ user.email }</p> })} </td>
            <td className="UserPhone">{users.map((user : any)=>{
            return <p key={user.id}>{ user.phoneNumber }</p> })} </td>
            <td className="UserRole">{users.map((user : any)=>{
            return <p key={user.id}>{ user.uRole }</p> })} </td>
            <td className="UserID">{users.map((user : any)=>{
            return <p key={user.id}>{ user._id }</p> })} </td>
            <td className="Update">{users.map((user : any)=>{
            return <p key={user.id}> <Link to={{pathname: `/admin/users/update/${user._id}`}}>
            <button type="button" className="btn btn-info" onClick={() =>  axios.put(`http://localhost:3030/auth/update/${user._id}`)}></button>
          </Link> </p>})} </td>
            <td className="Delete">{users.map((user : any)=>{
            return <p key={user.id}> <Link to={{pathname: "/admin" }}> <button  type="button" className="btn btn-danger" onClick={() =>  axios.delete(`http://localhost:3030/auth/delete/${user._id}`)}/></Link> </p>})} </td>
        </tr>
      </table>
      </div>
    </div>
    </div>
      </div>
  </div>
  )
}
