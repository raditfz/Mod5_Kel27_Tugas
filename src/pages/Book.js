import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Book.css";

export default function Book() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "Dona Dona", id: 1,
            rate: 3,
            genre: "Fiksi",
            img: "https://cdn.gramedia.com/uploads/picture_meta/2023/7/19/wbofrajxmgk573y6wmt7dc.jpg",
            desc:"Di sebuah lereng indah tak bernama di Hakodate, Hokkaido, berdiri Kafe Dona Dona yang menawarkan layanan istimewa kepada pengunjungnya: perjalananan melintasi waktu. Seperti di Funiculi Funicula yang ada di Tokyo, hal tersebut hanya dapat dilakukan jika berbagai peraturan yang merepotkan dipenuhi dan dengan secangkir kopi yang dituangkan oleh perempuan di keluarga Tokita."
        },
        {
            title: "Andai Sel-Sel Dalam Tubuhmu Berbicara", id: 2,
            rate: 5,
            genre: "Kesehatan",
            img: "https://cdn.gramedia.com/uploads/items/Andai_Sel-Sel_Dalam_Tubuhmu_Berbicara.jpg",
            desc:"Rizal Do, seorang ners dan praktisi healthy lifestyle yang sangat aktif memberikan edukasi kesehatan via media sosial, menjelaskan kinerja tubuh dalam menghadapi berbagai tantangan penyakit lewat kisah kocak, heroik, bahkan pilu tentang perjuangan para sel. Kisah ini menyentil dan menampar, tetapi sangat berharga untuk investasi kesehatan pada masa mendatang. Buku ini siap menantangmu untuk lebih mengenal diri sendiri dan mencintai tubuh dengan pola hidup sehat. Berani mulai sekarang?"
        },
        {
            title: "Weathering With You", id: 3,
            rate: 4,
            genre: "Novel Fiksi",
            img: "https://cdn.gramedia.com/uploads/items/Weathering_With_You_RbOW2b6.jpg",
            desc:"Jika biasanya buku diadaptasikan ke dalam sebuah film. Maka, kali ini kisah Weathering With You adalah kebalikannya. Yap, Weathering With You adalah sebuah buku yang diadaptasikan dari film yang juga berjudul “Weathering With You“. Novel ini dapat dinikmati oleh pembaca baik dari kalangan remaja maupun orang dewasa."
        },
        
    ];
    
    const navigateToDetailPage = (item) => {
        navigate(`/book/detail/${item.id}`, { state: { movieData: item } });
    };

    return (
        <>
            <p id="movies">Top Books</p>
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
                <p id="movies">All Books</p>
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