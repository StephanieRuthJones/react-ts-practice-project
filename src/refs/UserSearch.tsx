import { useState, useRef, useEffect } from 'react'

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 25 }
]

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    const [name, setName] = useState('')
    const [user, setUser] = useState<{ name: string, age: number } | undefined>()

    useEffect(() => {
        //this is a type guard: 
        //makes sure we aren't going to get any further down in function 
        //if don't have a type for inputRef
        if (!inputRef.current) {
            return
        }
        inputRef.current.focus()
    }, [])

    const onClick = () => {
        const foundUser = users.find(user => user.name === name)
        setUser(foundUser)
    }

    return <div>
        <input
            ref={inputRef}
            value={name}
            onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div>
            {user?.name}
            {user?.age}

        </div>
    </div>
}

export default UserSearch