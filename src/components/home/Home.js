import useFetch from "../useFetch";
import Type from "../Type";
import '../home/Home.css';
import img from '../../Assets/resume.png';
import img2 from '../../Assets/img2.png'
const Home = () => {
    const sheetID = '1ZBW3dFEA90aL55yMWmNKBvyiVuZwNRwF9xQweGHlCxc';
    const sheetRange = 'Sheet1';
    const apiKey = 'AIzaSyCdph4ll6vDNaZJLAM8pVqzmQH5W_posy4';
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheetRange}?key=${apiKey}`;
    const { data: dataNames, isPending, error } = useFetch(url);
    return (
        <>
            <section className="home-section">
                <div className="home-container">
                    <div className="home-banner">
                        <div className="item-1">
                            <h1>Hi There!</h1>
                            <h1>I'M <span className="hl">JAMES OCAMPO</span></h1>
                            <br />
                            <div className="type">
                                <Type />
                            </div>
                        </div>
                        <img className="img-1" src={img} alt="" />
                    </div>
                    <div className="home-content">
                        {isPending && <div className="spinner"></div>
                        }
                        <div className="home-content-container">
                            <div className="home-content-wraper item-2">
                                {error && <h1>{error}</h1>}
                                {dataNames &&
                                    dataNames.values.map((names, a) => (
                                        <h1 className="align-s" key={a}>{names[1]} </h1>
                                    ))
                                }
                                <br />
                                <br />
                                {dataNames &&
                                    dataNames.values.map((sub, index) => (
                                        <p key={index}>{sub[2]}</p>
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