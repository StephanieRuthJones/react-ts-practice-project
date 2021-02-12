import { ChildAsFC } from './Child'

const Parent = () => {
    return <ChildAsFC color="red"
        onClick={() => console.log("clicked")}
    >
        {/* any content in opening and closing tag will be provided to child as prop called children */}
        arbitrary text that will show up as children
    </ChildAsFC>
}

export default Parent