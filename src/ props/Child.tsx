interface ChildProps {
    color: string
    onClick: () => void //don't expect to get back usable value from onclick
}
//w/o react
//if providing children prop, need to specify in interfact ChildProps
export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click me</button>
    </div>
}
//w/ react: define functional component with ts 
//automatically takes into account the idea of taking in children
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
    return <div>{color}
        <button onClick={onClick}>Click me</button>
    </div>

}

