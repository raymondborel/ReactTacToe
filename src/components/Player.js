function Player(props) {
    return (
        <div className="{props.whichPlayer}">
            <h2>Player {props.whichPlayer}</h2>
            <h2>Wins: </h2>
        </div>
    )
}

export default Player