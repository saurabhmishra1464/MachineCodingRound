import './Timer.css'

export default function Timer(props) {
    return (
        <div className="timer">
            <div className='digits'>
            {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            </div>
            <div className='digits'>
            {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
            </div>
            <div className='digits miliseconds'>
                <span>{("0"+Math.floor((props.time/100)%60)).slice(-2)} </span>
            </div>
        </div>
    )
}