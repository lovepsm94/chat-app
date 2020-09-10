const view = {}
view.setActiveScreen = (screenName, fromCreateConversation = false) => {
    switch (screenName) {
        case 'registerPage':
            document.getElementById('app').innerHTML = component.registerPage
            const registerForm = document.getElementById('register-form')
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
                controller.register(data)
            })
            document.getElementById('redirect-to-login').addEventListener('click', () => {
                view.setActiveScreen('loginPage')
            })
            break;
        case 'loginPage':
            document.getElementById('app').innerHTML = component.loginPage
            const loginForm = document.getElementById('login-form')
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                controller.login(data)
            })
            document.getElementById('redirect-to-register').addEventListener('click', () => {
                view.setActiveScreen('registerPage')
            })
            break;
        case 'chatPage':
            document.getElementById('app').innerHTML = component.chatPage
            const sendMessageForm = document.getElementById('send-message-form')
            sendMessageForm.addEventListener('submit', (e) => {
                e.preventDefault()
                if (sendMessageForm.message.value.trim() !== '') {
                    const message = {
                        content: sendMessageForm.message.value,
                        owner: model.currentUser.email,
                        createdAt: new Date().toISOString()
                    }
                    model.addMessage(message)
                    sendMessageForm.message.value = ''
                }
            })
            document.getElementById('create-conversation').addEventListener('click', () => {
                view.setActiveScreen('createConversationPage')
            })
            if (fromCreateConversation) {
                view.showCurrentConversation()
                view.showConversations()
            } else {
                model.getConversations()
                model.listenConversationChange()
            }
            const addUser = document.getElementById('add-user-form')
            addUser.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = addUser.email.value
                controller.addUser(data)
                addUser.email.value = ''
                view.showConversations()
                view.showCurrentConversation()
            })
            break;
        case 'createConversationPage':
            document.getElementById('app').innerHTML = component.createConversationPage
            document.getElementById('redirect-to-chat').addEventListener('click', () => {
                view.setActiveScreen('chatPage', true)
            })
            const createConversationForm = document.getElementById('create-conversation-form')
            createConversationForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    title: createConversationForm.title.value,
                    email: createConversationForm.email.value
                }
                controller.createConversation(data)
            })
            break;

    }
}
view.setErrorMessage = (elementID, content) => {
    document.getElementById(elementID).innerText = content
}
view.addMessage = (message) => {
    const messageWrapper = document.createElement('div')
    messageWrapper.classList.add('message')
    if (message.owner === model.currentUser.email) {
        messageWrapper.classList.add('mine')
        messageWrapper.innerHTML = `
        <div class="content">${message.content}</div>
        `
    } else {
        messageWrapper.classList.add('their')
        messageWrapper.innerHTML = `
        <div class="owner">${message.owner}</div>
        <div class="content">${message.content}</div>
        `
    }
    document.querySelector('.list-message').appendChild(messageWrapper)
    document.querySelector('.list-message').scrollTop = document.querySelector('.list-message').scrollHeight
}
view.showCurrentConversation = () => {
    // document.querySelector('.conversation-title').innerText = model.currentConversation.title
    document.getElementsByClassName('conversation-tilte')[0].innerText = model.currentConversation.title
    document.querySelector('.list-message').innerHTML = ''
    document.querySelector('.list-users').innerHTML = ''
    for (message of model.currentConversation.messages) {
        view.addMessage(message)
    }
    for (user of model.currentConversation.users) {
        view.addUser(user)
    }
}
view.scrollToEnd = () => {
    document.querySelector('.list-message').scrollTop = document.querySelector('.list-message').scrollHeight
}
view.showConversations = () => {
    document.querySelector('.list-conversations').innerHTML = ''
    for (conversation of model.conversations) {
        view.addConversation(conversation)
    }
}
view.addConversation = (conversation) => {
    const conversationWrapper = document.createElement('div')
    conversationWrapper.classList.add('conversation')
    conversationWrapper.classList.add('cursor-pointer')
    if (conversation.id === model.currentConversation.id) {
        conversationWrapper.classList.add('current')
    }
    conversationWrapper.innerHTML = `
    <div class="left-conversation-title">${conversation.title}</div>
    <div class="num-of-user">${conversation.users.length} users</div>
    `
    document.querySelector('.list-conversations').appendChild(conversationWrapper)
    conversationWrapper.addEventListener('click', () => {
        model.currentConversation = model.conversations.filter(item => item.id === conversation.id)[0]
        view.showCurrentConversation()
        document.querySelector('.conversation.current').classList.remove('current')
        conversationWrapper.classList.add('current')
    })
}
view.addUser = (user) => {
    const addWrapper = document.createElement('div')
    addWrapper.classList.add('user-email')
    addWrapper.title = user
    addWrapper.innerHTML = user
    document.querySelector('.list-users').appendChild(addWrapper)
}
