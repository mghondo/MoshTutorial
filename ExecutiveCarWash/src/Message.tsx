function Message() {
    const name = 'Mosh'
    return <h1>Hello {name ? name : 'World!'}!</h1>
}

export default Message;