export const getUsers = async ( ) => {
    try {
        const req = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await req.json()
        return users
    } catch (error) {
        console.log('Error Getting Users: ' + error)
    }
}