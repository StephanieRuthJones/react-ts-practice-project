

const EventComponent: React.FC = () => {

    //error message around e when don't define type bc type inference system can't infer unless an inline function e.g., onChange={e => console.log(e)}
    //can find type of event by hovering over onChange
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }
    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log("i'm being dragged", event)
    }

    return (
        <div>
            <input onChange={onChange} />
            <div draggable onDragStart={onDragStart}>Drag Me!</div>
        </div>
    )
}

export default EventComponent