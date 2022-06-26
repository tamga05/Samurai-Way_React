import React from 'react';
import {RootStateType} from '../../../redux/state';


type FriendsType = {
    state: RootStateType
}


const Friends = (props: FriendsType) => {


    let friendsElements = props.state.sidebar.friends.map((el) => {
        return (
            <div>{el.name} {el.secondName}</div>
        );
    });


    return (
        <div>
            <div>{friendsElements}</div>
        </div>
    );
};

export default Friends;