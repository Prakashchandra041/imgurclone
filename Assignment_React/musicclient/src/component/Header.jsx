import { useState } from 'react'
import './Header.css'
import { ShowData } from './ShowData';
import { useEffect } from 'react';

export const Header = ({fun}) => {
    const [album, setAlbum] = useState("");
    const [inpval, setInpval] = useState("");
    const[songData, setSongData]=useState([])

      useEffect(() => {
        getData("rockstar");
    }, [])
    
    function getData(x) {
        fetch(`https://saavn.me
/search?album=${x}`).then((res) => res.json())
            .then((res) => {
                console.log(res)
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
          getData(inpval);
        console.log(songData)
    }

    function handleLH() {
        const updateList = songData.sort((a, b) => a.year - b.year);
        console.log(updateList)
        setSongData(updateList);
    }

    function handleHL() {
        const updateList = songData.sort((a, b) => b.year - a.year);
        console.log(updateList);
        setSongData(updateList);
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
        <div id='shortDiv'>
            <span>Short  By Year</span>
            <button onClick={handleLH}>Low To High</button>
            <button onClick={handleHL}>High To Low</button>
         </div>
        <ShowData props={songData}></ShowData>
    </>
}