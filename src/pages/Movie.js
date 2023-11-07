import { Fragment } from "react";
import { useNavigate } from 'react-router-dom'; 

import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";

export default function Movie() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "Weathering With You", id: 1,
            rate: 4,
            genre: "Drama, Fantasy, Romance",
            img: "https://cdn.myanimelist.net/images/anime/1880/101146.jpg",
            desc:"Tokyo saat ini sedang mengalami hujan yang tampaknya mengganggu aktivitas setiap orang yang tinggal di sana tanpa henti. Di tengah-tengah hujan yang tampaknya abadi ini, muncullah seorang siswa SMA yang melarikan diri dari rumah, Hodaka Morishima, yang berjuang untuk menghidupi dirinya sendiri - yang berakhir dengan pekerjaan di sebuah penerbit kecil. Pada saat yang sama, Hina Amano yang yatim piatu juga berusaha keras mencari pekerjaan untuk menghidupi dirinya sendiri dan adik laki-lakinya"
        },
        {
            title: "Hana and Alice: The Murder Case", id: 2,
            rate: 5,
            genre: "Mystery, Drama",
            img: "https://cdn.myanimelist.net/images/anime/12/71197.jpg",
            desc:"Jejak petunjuk membawanya ke rumah tetangga sebelahnya, Hana Arai yang unik dan tertutup. Setelah perkenalan yang canggung, Hana setuju untuk membantu Alice dan merumuskan sebuah rencana yang dapat membawa mereka pada jawaban yang mereka cari. Kedua gadis itu memulai perjalanan untuk mengungkap apa yang terjadi pada Yudas, dan mungkin persahabatan akan mulai terjalin di antara keduanya di sepanjang perjalanan"
        },
        {
            title: "Oppenheimer", id: 3,
            rate: 4,
            genre: "Biography, Drama, History",
            img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
            desc:"J. Robert Oppenheimer, the creator of The Atomic Bomb, is put on trial for his supposed communist ties in the past, all while coming to terms with what it meant to change the history of the world for the sake of winning World War Two. This is the story of how America's Prometheus was cast out by The Gods for giving mankind an unthinkable gift: power unlike any other, the power to destroy the world; the power of Olympus."
        },
        {
            title: "Your Name", id: 4,
            rate: 3,
            genre: "Romance, Fantasy, Drama",
            img: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
            desc: "Kimi no Na wa bercerita tentang Mitsuha Miyamizu, seorang siswi sekolah menengah atas yang tinggal di desa fiktif bernama Itomori di daerah pegunungan Hida Prefektur Gifu, mulai bosan dengan kehidupannya di pedesaan tempat dia lahir dan berharap dapat terlahir menjadi pemuda tampan yang hidup di Tokyo pada kehidupan selanjutnya. Kemudian, Taki Tachibana, seorang siswa sekolah menengah atas yang tinggal di Tokyo, terbangun dari tidurnya dan menyadari bahwa dirinya adalah Mitsuha, yang entah bagaimana bisa masuk ke dalam tubuh Taki."
        },
    ];

    // Create a function to navigate to the DetailPage with the selected movie data
    const navigateToDetailPage = (item) => {
        navigate(`/movie/detail/${item.id}`, { state: { movieData: item } });
    };

    return (
        <>
            <p id="movies">Top Movies</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig
                            title={item.title}
                            img={item.img}
                            genre={item.genre}
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                            rate={item.rate}
                            onClick={() => navigateToDetailPage(item)} 
                        />
                        {poster.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="movies">All Movies</p>
                    {poster.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                rate={item.rate}
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
