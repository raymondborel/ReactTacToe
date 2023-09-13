function Player(props) {
    return (

            <div className="player">
                <div className={`scoreBoard ${props.whichPlayer}`}>
                    <h2>Player {props.whichPlayer} Wins: {props.wins}</h2>
                </div>
            </div>
    )
}

export default Player