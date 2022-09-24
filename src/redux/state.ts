export type StoreType = {
    _state: RootStateType
    _renderTree: () => void
    getState: () => RootStateType
    addPost: () => void
    changeNewText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

// type AddPostActionType = {
//     type: 'ADD-POST'
//     postText: string
// }

// type ChangeNewTextActionType = {
//     type: 'CHANGE-NEW-TEXT'
//     newText: string
// }

// type AddPostActionType = ReturnType<typeof addPostActionCreator>
//
// type ChangeNewTextActionType = ReturnType<typeof newTextChangeHandlerActionCreator>

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof newTextChangeHandlerActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>  // Типизация Всего dispatch

export const addPostActionCreator = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}

export const newTextChangeHandlerActionCreator = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText
    } as const
}

// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
//
// const SEND_MESSAGE = 'SEND_MESSAGE'

export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: body
    } as const
}

export const sendMessageCreator = () => {
    return {
        type: 'SEND_MESSAGE',
        // body: body
    } as const
}


export const store: StoreType = {
    _state: {                                                   // Создан Стейт (state) //

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
            ],
            newMessageBody: ''
        },

        profilePage: {
            posts: [
                {id: 1, post: 'Chill out is great !!!', likescount: 15},
                {id: 2, post: 'Life is Beautiful !!!', likescount: 20},
                // {id: 3, post: 'The sea is cool...', likescount: 18}
            ],
            messageForNewPost: ''
        },

        sidebar: {
            friends: [
                {id: 1, name: 'Andrey', secondName: 'Nikitin'},
                {id: 2, name: 'Sasha', secondName: 'Ivanova'},
                {id: 3, name: 'Sveta', secondName: 'Petrova'}
            ]
        }
    },
    _renderTree() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._renderTree = observer;
    },
    dispatch(action) {                                                      // dispatch
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                post: action.postText,
                likescount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.messageForNewPost = '';
            this._renderTree();
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText;
            this._renderTree();
        } else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._renderTree();
        } else if (action.type === 'SEND_MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 7, message: body});
            this._renderTree();
        }
    },

    addPost() {
        const postText = this._state.profilePage.messageForNewPost
        const newPost: PostType = {
            id: new Date().getTime(),
            post: postText,
            likescount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.messageForNewPost = ''             // Очистка Поля ввода после Добавления нового поста !!!
        this._renderTree();
    },

    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText;
        this._renderTree();
    }
}


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
    newMessageBody: string
}

type sidebarType = {
    friends: Array<friendType>
}

export type RootStateType = {          // Типизация ВСЕГО стейта (state) //
    dialogsPage: dialogsPageType
    profilePage: ProfilePageType
    sidebar: sidebarType
}
