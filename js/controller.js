const controller = {}
controller.register = (data) => {
    view.setErrorMessage('first-name-error', data.firstName === ''? 'Please input your first name' : '')
    view.setErrorMessage('last-name-error', data.lastName === ''? 'Please input your last name' : '')
    view.setErrorMessage('email-error', data.email === ''? 'Please input your email' : '')
    view.setErrorMessage('password-error', data.password === ''? 'Please input your password' : '')
    if(data.confirmPassword === '') {
        view.setErrorMessage('confirm-password-error', 'Please input your confirm password')
    } else if(data.confirmPassword !== data.password) {
        view.setErrorMessage('confirm-password-error', 'Password and confirm password does not match')
    } else {
        view.setErrorMessage('confirm-password-error','')
    }
    if(data.firstName !== '' && data.lastName !== '' && data.email !== '' && data.password !== '' && data.confirmPassword !== '' && data.password === data.confirmPassword) {
        model.register(data)
    }
}
controller.login = (data) => {
    view.setErrorMessage('email-error', data.email === ''? 'Please input your email' : '')
    view.setErrorMessage('password-error', data.password === ''? 'Please input your password' : '') 
    if(data.email !== '' && data.password !== '') {
        model.login(data)
    } 
}
controller.createConversation = ({title, email}) => {
    if(title.trim() === '') {
        view.setErrorMessage('create-conversatin-title-error', 'Please input title')
    } else {
        view.setErrorMessage('create-conversatin-title-error', '')
    }
    if(email.trim() === '') {
        view.setErrorMessage('create-conversatin-email-error', 'Please input email')
    } else {
        view.setErrorMessage('create-conversatin-email-error', '')
    }
    if(title.trim() !== '' && email.trim() !== '') {
        model.createConversation({title, email})
    }
}
