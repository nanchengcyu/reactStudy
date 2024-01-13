import {useState} from "react";

function Detail() {
    const [status, setStatus] = useState(false)

    function handleClick() {
     setStatus(!status)
    }

    return (
        <div>
            <p style={{
                display:status ? 'block':'none'
            }}>
                Detail的content
            </p>
            <button onClick={handleClick}>按钮</button>
        </div>
    )
}

export default function App() {
    return (
        <>

            {/*导入父组件*/}
            <Detail/>
        </>
    )
}