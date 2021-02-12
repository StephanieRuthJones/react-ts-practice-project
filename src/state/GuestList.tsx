import { useState } from 'react'


//if not receive props, no need from <> next to React.FC
const GuestList: React.FC = () => {
    const [name, setName] = useState('')
    //<string[]> tells ts that state will be an array of strings
    //put default value in useState and if it's a string, ts knows what it is
    //if type is not string, need to specify
    const [guests, setGuests] = useState<string[]>([])

    const onClick = () => {
        setName('')
        setGuests([...guests, name])
    }

    return <div>
        <h3>Guest List</h3>
        <input value={name} onChange={e => setName(e.target.value)} />
        <ul>
            {guests.map(guest => <li key={guest}>{guest}</li>)}
        </ul>
        <button onClick={onClick}>Add Guest</button>
    </div>
}

export default GuestList