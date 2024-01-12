function getName() {
    return 'nanchengyu'
}

const isLogin = false
const num = 3 //0 1 3
//定义核心函数
function getPicture() {
    if (num === 0) {
        return "无图"
    } else if (num === 1) {
        return "单图"
    } else {
        return "three p"
    }
}

const handleClick = (name) => {
    console.log('click', name)
}

function Button() {
    return <button>click me</button>
}

function App() {
    return (
        <div className="App">
            nanchengyu
            {/*//函数调用*/}
            {getName()}
            {/*//方法调用*/}
            <br></br>
            {new Date().getDay()}
            {/*使用js对象*/}
            <div style={{color: "blue"}}>hhhh</div>
            <br></br>
            {isLogin && <span>this is login</span>}
            {isLogin ? <span>login success</span> : <span>loading</span>}
            <br></br>

            {getPicture()}
            {/*// 事件参数e*/}

            return(
            <div className="App">
                <button onClick={() => handleClick('ncy')}> click me
                </button>
            </div>)

            <button></button>
            <button/>
        < /div>
    )
        ;
}

export default App;
