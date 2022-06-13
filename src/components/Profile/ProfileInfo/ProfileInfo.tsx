import React from 'react';
import s from './ProfileInfo.module.css';


type ProfileInfoPropsType = {
    avatar: string
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div className={s.contentProfileInfo}>
            <div>
                <img className={s.contentHeroImg}
                     src="https://img3.goodfon.ru/wallpaper/nbig/8/f4/tropical-paradise-beach-coast-7511.jpg"
                     alt="paradise"/>
            </div>
            Blogger
            <div>
                <img className={s.contentProfileInfoImg} src={props.avatar} alt="avatar"/>
            </div>
            <p>About the blogger...</p>
        </div>
    );
};

export default ProfileInfo;
