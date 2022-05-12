import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Layout({ children }) {
  return (
    <div className="bg-slate-800">
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
export default Layout;
