function Player(props) {
    return (
        <div className={props.whichPlayer}>
            <h2>Player {props.whichPlayer}</h2>
            <h1>Wins: </h1>
        </div>
    )
}

export default Player