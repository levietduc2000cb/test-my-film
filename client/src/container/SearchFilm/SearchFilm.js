import Layout from "../../components/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useParams } from "react-router-dom";
function SearchFilm(props) {
  const params = useParams();
  let searchFilm = params.searchFilm.toString();
  console.log(searchFilm);
  return (
    <Layout>
      <div className="bg-black">
        <div className="container m-auto pt-16 pb-16">
          <SearchBar />
        </div>
      </div>
      <div className="bg-black mt-2 mb-2">
        <div className="container m-auto text-white">
          <div className="h-1/2 w-full flex justify-center items-center p-10">
            Chức năng này chưa hoàn thiện
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default SearchFilm;
