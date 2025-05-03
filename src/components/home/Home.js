import useFetch from "../useFetch";
import Type from "../Type";
import '../home/Home.css';
import img from '../../Assets/resume.png';
import img2 from '../../Assets/img2.png'
const Home = () => {
    const { data: dataNames, isPending, error } = useFetch('https://api.sheetbest.com/sheets/0717022e-8757-4c3b-818e-ddef7828fe1d');

    return (
        <>
            <section className="home-section">
                <div className="home-container">
                    <div className="home-banner">
                        <div className="item-1">
                            <h1>Hi There</h1>
                            <h1>I'M <span className="hl">JAMES OCAMPO</span></h1>
                            <br />
                            <div className="type">
                                <Type />
                            </div>
                        </div>
                        <img className="img-1" src={img} alt="" />
                    </div>
                    <div className="home-content">

                        <div className="home-content-container">
                            <div className="home-content-wraper item-2">
                                {isPending && <div className="spinner"></div>
                                }
                                {error && <h1>{error}</h1>}
                                {dataNames &&
                                    dataNames.map((names, id) => (
                                        <h1 className="align-s" key={id}>{names.homeDiscription} </h1>
                                    ))
                                }
                                <br />
                                <br />
                                {dataNames &&
                                    dataNames.map((sub, index) => (
                                        <p key={index}>{sub.homeParagraph}</p>
                                    ))
                                }
                            </div>

                            <img className="img-2" src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;