const component = {}
component.registerPage = `
<div class="register-container">
<form id="register-form">
    <div class="register-header">Bobo Chat</div>
    <div class="name-wrapper">
        <div class="input-wrapper">
            <input type="text" placeholder="First name..." name="firstName">
            <div class="error" id="first-name-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="text" placeholder="Last name..." name="lastName">
            <div class="error" id="last-name-error"></div>
        </div>    
    </div>
    <div class="input-wrapper">
        <input type="text" placeholder="Email..." name="email">
        <div class="error" id="email-error"></div>
    </div>
    <div class="input-wrapper">
        <input type="password" placeholder="Password..." name="password">
        <div class="error" id="password-error"></div>
    </div>
    <div class="input-wrapper">
        <input type="password" placeholder="Confirm password..." name="confirmPassword">
        <div class="error" id="confirm-password-error"></div>
    </div>
    <div class="form-action">
        <div class="cursor-pointer" id="redirect-to-login">Already have an account? Login</div>
        <button type="submit" class="btn cursor-pointer">Register</button>
    </div>
</form>
</div>
`
component.loginPage = `
<div class="login-container">
    <form id="login-form">
        <div class="login-header">Bobo Chat</div>
        <div class="input-wrapper">
            <input type="text" placeholder="Email..." name="email">
            <div id="email-error" class="error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" placeholder="Password..." name="password">
            <div id="password-error" class="error"></div>
        </div>
        <div class="form-action">
            <div class="cursor-pointer" id="redirect-to-register">Don't have an account? Register</div>
            <button type="submit" class="btn cursor-pointer">Login</button>
        </div>
    </form>
</div>
`
component.chatPage = `
<div class="chat-container">
<div class="header">Bobo Chat</div>
<div class="main">
    <div class="aside-left">
        <div class="create-conversation">
            <button class="btn cursor-pointer" id="create-conversation">+New conversation</button>
        </div>
        <div class="list-conversations"></div>
    </div>
    <div class="conversation-detail">
        <div class="conversation-title"></div>
        <div class="list-message">
        </div>
        <form id="send-message-form">
            <div class="input-wrapper">
                <input type="text" placeholder="Type a message" autocomplete="off" name="message">
                <button type="submit"><i class="fas fa-paper-plane"></i></button>
            </div>
        </form>
    </div>
    <div class="aside-right">
        <div class="list-users">
        </div>
        <form class="mt-1" id="add-user-form">
            <div class="input-wrapper">
                <input type="text" name="email" placeholder="Friend email">
                <div class="error" id="email-error"></div>
            </div>
            <button class="btn">Add</button>
        </form>
    </div>
</div>
</div>
`
component.createConversationPage = `
<div class="create-conversation-wrapper">
<div class="header">MindX chat</div>
<form id="create-conversation-form" style="width: 60%;margin: auto;margin-top: 20px;">
  <h4>Create a new conversation</h4>
  <div class="input-wrapper">
    <input type="text" placeholder="Conversation title" name="title">
    <div class="error" id="create-conversation-title-error"></div>
  </div>
  <div class="input-wrapper">
    <input type="text" placeholder="Friend email" name="email">
    <div class="error" id="create-conversation-email-error"></div>
  </div>
  <button class="btn">Save</button>
  <button class="btn btn-bg-light" type="button" id="redirect-to-chat">Cancel</button>
</form>
</div>
` 