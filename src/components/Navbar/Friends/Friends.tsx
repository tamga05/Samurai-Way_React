import React from 'react';
import {RootStateType} from '../../../redux/state';


type FriendsType = {
    state: RootStateType
}


const Friends = (props: FriendsType) => {
    return (
        <div>
            <div>A</div>
            <div>B</div>
            <div>C</div>
        </div>
    );
};

export default Friends;