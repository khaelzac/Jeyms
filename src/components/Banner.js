import Img from "../Assets/resume.png";
function testComponents (){
    return (
        <>
            <div className="banner-section">
                <div className="banner-container">
                    <img src={Img} alt=""/>
                    <div className="banner-content">
                        <h1>This is My Portfolio</h1>
                        <p>I am a dedicated and passionate Information Technology student with a strong foundation in software development, system analysis, and network administration. Throughout my academic journey and on-the-job training, I have developed practical skills in programming, database management, and IT support. I am proficient in tools such as Visual Studio and have experience working on real-world projects that showcase my ability to solve problems, work collaboratively, and deliver high-quality results. I continuously strive to learn and grow, aiming to contribute innovative solutions in the tech industry.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default testComponents;