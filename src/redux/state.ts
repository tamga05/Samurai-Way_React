type PostType = {
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
}

type profilePageType = {               // Типизация ветки стейта profilePage //
    posts: Array<PostType>
}

type dialogsPageType = {               // Типизация ветки стейта dialogsPage //
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type sidebarType = {}


export type RootStateType = {          // Типизация ВСЕГО стейта (state) //
    dialogsPage: dialogsPageType
    profilePage: profilePageType
    sidebar: sidebarType
}


let state: RootStateType = {           // Создан Стейт (state) //

    dialogsPage: {

        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
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

    sidebar: {}
};

export default state;
