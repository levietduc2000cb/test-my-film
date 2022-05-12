import classes from "./Home.module.css";
import Layout from "../../components/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";
import NewListMovie from "../../components/NewListMovie/NewListMovie";
import TopListMovie from "../../components/TopListMovie/TopListMovie";
import Carousel from "../../components/Carousel/Carousel";

function Home(props) {
  return (
    <Layout>
      <div className="home">
        <section className="bg-black pt-16 pb-16">
          <SearchBar />
        </section>
        <section className="bg-black mt-1">
          <div className={`container m-auto p-12 ${classes.displayBlock}`}>
            <Carousel />
          </div>
        </section>
        <section className="film bg-black mb-1 pb-8">
          <div className="container m-auto pl-12 pr-12">
            <div className="flex">
              <div>
                <NewListMovie pathData="now_playing" titleName="Phim Mới" />
                <NewListMovie pathData="popular" titleName="Phim Phổ Biến" />
                <NewListMovie pathData="upcoming" titleName="Phim Sắp Chiếu" />
              </div>
              <div
                className={`${classes.hiddenTopFilm} md:hidden xl:block ml-10`}
              >
                <TopListMovie />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
export default Home;
