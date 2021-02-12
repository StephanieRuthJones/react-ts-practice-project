import { useState } from 'react'

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 25 }
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('')
    //useState will be two possible types
    const [user, setUser] = useState<{ name: string, age: number } | undefined>()
    const onClick = () => {
        const foundUser = users.find(user => user.name === name)
        setUser(foundUser)
    }
    return <div>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div>
            {/* user may be undefined, so need to make sure user is defined */}
            {user?.name}
            {user?.age}

        </div>
    </div>
}

export default UserSearch