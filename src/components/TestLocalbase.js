import Localbase from 'localbase'

const TestLocalbase = () => {

    let db = new Localbase('db')

    const insertIntoDb = () => {
        db.collection('users').add({
            id: Math.random(),
            name: 'John',
            age: '30'
        })
    }

    const getFromDb = () => {
        db.collection('users').get()
            .then(users => console.log(users))
    }

    const deleteFromDb = () => {
        db.collection('users').delete()
    }

    return <>
        <h1>Local DB testing</h1>
        <button onClick={insertIntoDb}>Add user</button>
        <button onClick={getFromDb}>Get all users</button>
        <button onClick={deleteFromDb}>Delete all users</button>
    </>
}

export default TestLocalbase;