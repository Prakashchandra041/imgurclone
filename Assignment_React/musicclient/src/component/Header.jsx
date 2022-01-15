import { useState } from 'react'
import './Header.css'
import { ShowData } from './ShowData';
import { useEffect } from 'react';

export const Header = ({fun}) => {
    const [album, setAlbum] = useState("");
    const [inpval, setInpval] = useState("");
    const[songData, setSongData]=useState([])

      useEffect(() => {
        getData();
    }, [])
    
    function getData(album) {
        fetch(`https://saavn.me
/search?album=love`).then((res) => res.json())
            .then((res) => {
                setSongData(res);
        
})        
    }

    function handleInput(e) {
         let val=e.target.value
        setInpval(val);
    }

    function handleBtn() {
        setAlbum(inpval);
        // fun(album);
        console.log(songData)
    }

   
    return <>
        <div className="headerBox">
            <div>HOME</div>
            <div>
                <input id='headerInput' type="text" placeholder="Enter your Song" onChange={handleInput} value={inpval} />
                <button id='headerbtn' onClick={handleBtn}>Enter</button>
            </div>

            <div>SIGN IN</div>
            <div>LOGIN</div>

            
        </div>
        <ShowData props={songData}></ShowData>
    </>
}