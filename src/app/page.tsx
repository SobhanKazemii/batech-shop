import { NextPage } from "next";
import Container from "./components/shared/Container";
import MainHomeSlider from "./components/sliders/MainHomeSlider";
import "swiper/css";

const HomePage: NextPage = () => {
    return (
        <>
            <section>
                <Container>
                    <MainHomeSlider />
                </Container>
            </section>
        </>
    );
};

export default HomePage;
