import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';


type DialogsPropsType = {
    props: any
}

const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={1} name={'Dimych'}/>
                <DialogItem id={2} name={'Andrey'}/>
                <DialogItem id={3} name={'Sveta'}/>
                <DialogItem id={4} name={'Sasha'}/>
                <DialogItem id={5} name={'Viktor'}/>
                <DialogItem id={6} name={'Valera'}/>

                {/*<div className={`${s.dialog} ${s.active}`}>*/}
                {/*    <NavLink to={'/dialogs/1'}>Dimych</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to={'/dialogs/2'}>Andrey</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to={'/dialogs/3'}>Sveta</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to={'/dialogs/4'}>Sasha</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to={'/dialogs/5'}>Viktor</NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to={'/dialogs/6'}>Valera</NavLink>*/}
                {/*</div>*/}

            </div>
            <div className={s.messages}>
                <DialogMessage message={'Hi'}/>
                <DialogMessage message={'How is your it-kamasutra'}/>
                <DialogMessage message={'Yo'}/>
            </div>
        </div>
    );
};

export default Dialogs;