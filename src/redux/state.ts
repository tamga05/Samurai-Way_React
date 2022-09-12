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

type ProfilePageType = {               // Типизация ветки стейта profilePage //
    messageForNewPost: string
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
    profilePage: ProfilePageType
    sidebar: sidebarType
}


let state: RootStateType = {           // Создан Стейт (state) //

    dialogsPage: {

        dialogs: [
            {
                id: 1,
                name: 'Dimych',
                avatar: 'https://i.pinimg.com/564x/10/45/ba/1045ba1a64aeb19201d5fd6d8d2b1722.jpg'
            },
            {
                id: 2,
                name: 'Andrey',
                avatar: 'https://escape-kit.com/wp-content/uploads/2020/06/rouge-min.png'
            },
            {
                id: 3,
                name: 'Sveta',
                avatar: 'https://www.pngarts.com/files/3/Employee-Avatar-PNG-Pic.png'
            },
            {
                id: 4,
                name: 'Sasha',
                avatar: 'https://www.pngarts.com/files/3/Girl-Avatar-PNG-Download-Image.png'
            },
            {
                id: 5,
                name: 'Viktor',
                avatar: 'https://e7.pngegg.com/pngimages/348/800/png-clipart-man-wearing-blue-shirt-illustration-computer-icons-avatar-user-login-avatar-blue-child-thumbnail.png'
            },
            {
                id: 6,
                name: 'Valera',
                avatar: 'https://e7.pngegg.com/pngimages/78/788/png-clipart-computer-icons-avatar-business-computer-software-user-avatar-child-face.png'
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

        messageForNewPost: '',

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


export const addPost = () => {

    const newPost: PostType = {
        id: new Date().getTime(),
        // post: postText,
        post: state.profilePage.messageForNewPost,
        likescount: 0
    }

    state.profilePage.posts.push(newPost);

    state.profilePage.messageForNewPost = ''  // Очистка Поля ввода после Добавления нового поста !!!

    renderTree(state);
}

export const changeNewText = (newText: string) => {
    state.profilePage.messageForNewPost = newText;

    renderTree(state);
}

export default state;

