import React from 'react';
import s from './ProfileInfo.module.css';


type ProfileInfoPropsType = {
    avatar: string
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div className={s.profileInfo}>

            <img className={s.profileInfoImg}
                 src="https://www.hagalerya11.co.il/wp-content/uploads/2020/05/sea1s.jpg"
                 alt="paradise"/>

            <div className={s.profileInfoBlogger}>
                <h3>Blogger</h3>
                <img className={s.profileInfoAvatar} src={props.avatar} alt="avatar"/>
                <p>About the blogger...</p>
            </div>

        </div>
    );
};

export default ProfileInfo;
