import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Game.css";

export default function Game() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "Fate/ Grand Order", id: 1,
            rate: 5,
            genre: "RPG",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Fate_Grand_Order_logo.png/330px-Fate_Grand_Order_logo.png",
            desc:"Fate/Grand Order is a turn-based role-playing game with some visual novel elements. The player takes the role of a Master and commands a group of individuals called servants, who are typically historical, literary, and mythological figures from various cultures."
        },
        {
            title: "Dota 2", id: 2,
            rate: 3,
            genre: "MOBA",
            img: "https://upload.wikimedia.org/wikipedia/en/3/31/Dota_2_Steam_artwork.jpg",
            desc:"Dota 2 is a 2013 multiplayer online battle arena (MOBA) video game by Valve. The game is a sequel to Defense of the Ancients (DotA), a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos. Dota 2 is played in matches between two teams of five players."
        },
        {
            title: "Watch Dogs 2", id: 3,
            rate: 4,
            genre: "Action, Stealth",
            img: "https://image.api.playstation.com/cdn/UP0001/CUSA04459_00/qBxvfDJJ9dbavai6xsWOcWaxRDGRb7h0.png",
            desc:"Watch Dogs 2 is a 2016 action-adventure game developed by Ubisoft Montreal and published by Ubisoft. It is the sequel to 2014's Watch Dogs and the second installment in the Watch Dogs series."
        },
        
    ];

    const navigateToDetailPage = (item) => {
        navigate(`/game/detail/${item.id}`, { state: { movieData: item } });
    };
    

    return (
        <>
            <p id="movies">Top Games</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} onClick={() => navigateToDetailPage(item)} 
                        />
                        {poster.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                <p id="movies">All Games</p>
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        
                        <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} rate={item.rate} 
                            onClick={() => navigateToDetailPage(item)} 
                        />
                        {poster.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
                </div>
            </div>
        </>
    );
}