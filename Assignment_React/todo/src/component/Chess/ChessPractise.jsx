import "./AmolChess.css"

export const ChessPractise = () => {
    const arr = [];
    const alph = ["a", "b", "c", "d", "e", "f", "g", "h"];
    for (let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
            if ((i + j) % 2 === 0) {
                arr.push(<div className="whitee">{ alph[j]}</div>)
            } else {
                arr.push(<div className="blackk" >{ alph[j]}</div>)
            }
        }
    }

    return <>
        <div className="board">{arr}</div>
    </>
}