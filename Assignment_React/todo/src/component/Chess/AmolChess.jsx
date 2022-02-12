
import './AmolChess.css';

export const Amolchess = () => {

    let hr = [1, 2, 3, 4, 5, 6, 7, 8];
    
    let vert = ["a", "b", "c", "d", "e", "f", "g", "h"]
    
    let arr = [];

        for (let i = 1; i <= hr.length; i++){
            for (let j = 1; j <= vert.length; j++){
                    let sum = i+j

                if (sum % 2 === 0) {
                    arr.push(<div className='blackk'>{ hr[i]}{vert[j] }</div>);
                    
                } else {
                    arr.push(<div className='whitee'>{hr[i]}{vert[j] }</div>)
                  }
            }
        }
    
    console.log("arr",arr);

    return <>
        <div className="board">{ arr}</div>
            
        
    </>
}