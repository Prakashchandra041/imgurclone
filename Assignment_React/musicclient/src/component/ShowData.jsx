import './ShowData.css'
export const ShowData = ({props}) => {
    const { album_name, album_artist, album_id, album_image, album_language, album_link, year } = props;
    
    console.log("props",props)
    
    

    return <div id="outerGrid">
        {props.map(({ album_name, album_artist, album_id, album_image, album_language, album_link, year }) => {
        // console.log("movies",album_name, album_artist, album_id, album_image, album_language, album_link, year)
         return   <div  id='EachBox' key={album_id}> 
                <div id="EachImg"><img src={album_image} alt="moviepic" /></div>
                <div id="detail">
                    <div id="detailLeft">
                        <h3>{album_name}</h3>
                        <h4>{ album_artist}</h4>
                    </div>
                    <div id="detailRight">
                        <h4>{album_language}</h4>
                        <p>{ year}</p>
                    </div>
                </div>
                <button id='playBtn' href={album_link}>Play</button>
            </div>
    })}
    </div>
}