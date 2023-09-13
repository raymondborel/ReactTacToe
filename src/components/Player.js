function Player(props) {
    return (
        <div className="player">
            <div className={props.whichPlayer}>
                <h2>Player {props.whichPlayer}</h2>
                <h1>Wins: {props.wins}</h1>
            </div>
        </div>
    )
}

export default Player