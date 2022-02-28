import Footer from "../../footer/Footer";
import TopNavbar from "../../topNavbar/TopNavbar";

const BplBenefits = () => {

    return (<div>
        <div className="pageContainer">
            <TopNavbar />
            <section className="header no-margin-bottom">
                <h1>The Benefits of Blended and Personalized Learning</h1>
            </section>
            <section className="learn-more bkg-dark">
                <h2><strong>Personalized Learning and Its Benefits</strong></h2>
                <h4>Optimized toward students as <strong>individuals</strong>, Personalized Learning is
                    <strong>more engaging</strong> for students while making <strong>classroom management significantly easier</strong>.
                </h4>
                <h4>Personalized Learning promotes <strong>more meaningful teacher-student relationships</strong> and
                    can be implemented <strong>with or without the use of computer technology</strong>.
                </h4>
            </section>
            <section>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <p>
                            Personalized Learning characterizes <strong>educational methods that are optimized toward the students as individuals, rather than as a group</strong>.
                            It is designed to respond, to the greatest extent possible, to each student's learning needs and interests
                            by encouraging students to be reflective about their learning and to take responsibility for their learning paths.
                            Personalized Learning allows for feedback to be provided to both the teacher and student, via ongoing data collection,
                            to further direct the student's learning and to personalize the teacher's instruction.
                        </p>
                        <p>
                            There are several significant <strong>advantages</strong> of Personalized Learning.
                            Each student approaches their learning with unique strengths and weaknesses, interests and inclinations, and levels of motivation.
                            Personalized Learning can be tailored to these differences to promote improved student learning.  Additionally, Personalized Learning is
                            more engaging for students, who are more likely to feel appropriately challenged and are more likely to receive timely and specific feedback.
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/BPL/IMG-20211223-WA0002.jpg" alt="Boys Learn Together in a BPL environment" />
                    </div>
                </div>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <p>
                            Personalized Learning promotes active learning by requiring students to take an active role in their learning process.  Active learning is itself more engaging to students and more effective in their growth.
                            <strong>Classroom management is often significantly easier when students are actively engaged in the learning process, which can make the job of the rebbe or morah easier and more enjoyable.</strong>
                        </p>
                        <p>
                            Personalized Learning can create more opportunities for the rebbe or morah to meet with their students in small groups or in one-on-one settings.
                            They can get to know their students better and develop <strong>deeper, more meaningful relationships with them</strong>.
                        </p>
                        <p>Personalized Learning can be implemented <strong>with or without the use of computer technology</strong>.
                            A rebbe or morah can design and implement “low-tech” personalized learning and data collection opportunities
                            in their Limudei Kodesh classroom in a way that engages their students and promotes student growth.
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/BPL/IMG-20211215-WA0031.jpg" alt="Girls Learn Together in a BPL environment" />
                    </div>
                </div>
            </section>
            <section className="learn-more bkg-dark">
                <h2><strong>Blended Learning and Its Benefits</strong></h2>
                <h4>
                    Blended Learning enhances student learning by "blending" the use of computer technology with traditional, face-to-face learning methods.
                </h4>
                <h4>
                    Blended Learning has several critical advantages.
                </h4>
            </section>
            <section>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <p>
                            Personalized Learning is often facilitated by the implementation of computer technology in the classroom
                            which can be “blended” with more traditional and lower-tech methods of learning (“Blended Learning”).
                            Blended Learning often facilitates, augments, and enhances, student learning in several important ways.
                        </p>
                        <p>
                            Computer technology increases access to learning resources beyond what any one teacher can offer on their own.
                            For example, a rebbe or morah can direct students to instructional videos, learning websites, platforms,
                            and apps, that can enable <strong>enrichment for advanced students, remediation for weaker students, and a deeper learning experience for all</strong>.
                            These resources can be generated or curated by the rebbe or morah, or by anyone else.
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/BPL/IMG_0598.jpg" alt="A teacher works with a small group while other students learn on computers" />
                    </div>
                </div>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <p>
                            Blended Learning facilitates multiple modalities of learning,
                            which is often more engaging and effective for students.
                            For example, students can use the computer’s voice recorder to record themselves reading text.
                            This allows more students to practice reading more text aloud, simultaneously, and even send the recordings easily to the teacher.
                            Student engagement can also be promoted by high-interest activities such as a video or educational game.
                        </p>
                        <p>
                            Additionally, technology  gives students the ability to create higher quality presentations,
                            such as slideshows, drawings, cartoons, pictures, and videos.  This often affords students the ability to be creative in ways that could not be
                            accomplished without the use of computer technology.
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/BPL/IMG_0604.jpg" alt="Boys learn with the Lomdei platform" />
                    </div>
                </div>
                <div className="text-pic-side">
                    <div className="tps-txt">
                        <p>
                            Students can display and share their creativity with a wider audience, such as the whole class (via the class’ Smartboard or projector),
                            or the parents or wider school community (via various computer sharing mechanisms).
                        </p>
                        <p>
                            Technology often facilitates a tighter “feedback-loop,” which can be crucial for student success.
                            For example, a student can practice a skill such as interpreting a Hebrew text and receive timely feedback on his work;
                            he can then edit his work using the feedback he receives, and continue to get more feedback, until mastery is achieved.
                            Attempting this process of multiple revisions is typically too difficult using paper.
                        </p>
                    </div>
                    <div className="tps-pic">
                        <img src="../../pictures/BPL/IMG_0601.jpg" alt="A BPL classroom in action" />
                    </div>
                </div>
            </section>

        </div>
        <Footer />
    </div>)
}

export default BplBenefits;