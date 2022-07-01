import {renderTree} from '../render';


type friendType = {
    id: number
    name: string
    secondName: string
}

export type PostType = {
    id: number
    post: string
    likescount: number
}

type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
    avatar: string
}

type profilePageType = {               // Типизация ветки стейта profilePage //
    posts: Array<PostType>
}

type dialogsPageType = {               // Типизация ветки стейта dialogsPage //
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type sidebarType = {
    friends: Array<friendType>
}


export type RootStateType = {          // Типизация ВСЕГО стейта (state) //
    dialogsPage: dialogsPageType
    profilePage: profilePageType
    sidebar: sidebarType
}


let state: RootStateType = {           // Создан Стейт (state) //

    dialogsPage: {

        dialogs: [
            {
                id: 1,
                name: 'Dimych',
                avatar: 'https://d1uqii9w4uahg1.cloudfront.net/cdn/x/x@c6cae1948b/https://s52.impactinit.com/smsimg30//pv/ingimagecontributors/ing_47129_23497.jpg'
            },
            {
                id: 2,
                name: 'Andrey',
                avatar: 'https://d1uqii9w4uahg1.cloudfront.net/cdn/x/x@c6cae1948b/https://s52.impactinit.com/smsimg30//pv/ingimagecontributors/ing_47129_23497.jpg'
            },
            {
                id: 3,
                name: 'Sveta',
                avatar: 'https://www.clipartmax.com/png/middle/108-1085862_aim-for-teaching-has-always-helped-me-and-encouraged-girl-avatar-png.png'
            },
            {
                id: 4,
                name: 'Sasha',
                avatar: 'https://www.clipartmax.com/png/middle/108-1085862_aim-for-teaching-has-always-helped-me-and-encouraged-girl-avatar-png.png'
            },
            {
                id: 5,
                name: 'Viktor',
                avatar: 'https://d1uqii9w4uahg1.cloudfront.net/cdn/x/x@c6cae1948b/https://s52.impactinit.com/smsimg30//pv/ingimagecontributors/ing_47129_23497.jpg'
            },
            {
                id: 6,
                name: 'Valera',
                avatar: 'https://d1uqii9w4uahg1.cloudfront.net/cdn/x/x@c6cae1948b/https://s52.impactinit.com/smsimg30//pv/ingimagecontributors/ing_47129_23497.jpg'
            }
        ],

        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'}
        ]
    },

    profilePage: {

        posts: [
            {id: 1, post: 'The sea is cool...', likescount: 15},
            {id: 2, post: 'Chill out is great !!!', likescount: 18},
            {id: 3, post: 'Life is Beautiful !!!', likescount: 20}
        ]
    },

    sidebar: {

        friends: [
            {id: 1, name: 'Andrey', secondName: 'Nikitin'},
            {id: 1, name: 'Sasha', secondName: 'Ivanova'},
            {id: 1, name: 'Sveta', secondName: 'Petrova'}
        ]
    }
}


export const addPost = (postText: string) => {

    const newPost: PostType = {
        id: new Date().getTime(),
        post: postText,
        likescount: 0
    }

    state.profilePage.posts.push(newPost);

    renderTree(state);
}

export default state;

