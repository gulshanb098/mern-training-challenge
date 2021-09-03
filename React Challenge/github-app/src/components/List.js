import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

function List(props) {
    
    // create useHistory() instance
    const history = useHistory()
    // set the props value to the users
    const { users } = props;

    //check if user exist or not
    if (!users || users.length === 0) {
        return <h3>No Users Found !!</h3>;
    }

    // get specific user using login_name details and push to the 'details' page
    const ViewProfile = async (user) =>{
        const userDetail = await axios.get(`https://api.github.com/users/${user}`);
        history.push({
            pathname: '/details',
            state: userDetail.data,
        });
    }

    // return the html data and set value to the tags
    return (
        <ul>
        <h2>List Of Github Users : (total : {users.total_count})</h2><br/>        
        {users.items.map((user) => {
            return (
            <div onClick={ViewProfile}>
              <li key={user.id} className='list'>
                <span className='user-text'> {user.login} <button style={{float : 'right'}} onClick={()=>{ViewProfile(user.login)}}>Profile</button> </span>
              </li><br/>
            </div>
            );
          })}
        </ul>
      );
};

export default List;