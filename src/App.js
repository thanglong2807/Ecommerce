import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoute } from "./Routes";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import CommonStyle from "./globalStyle/common";


function App() {
  return (
    <div className="App">
      <CommonStyle />
      <Router>
        <Header />
        <Routes>
          {
            publicRoute.map(item => {
              const Layout = item.component
              return <Route key={item.id} path={item.path} element={<Layout />} />
            })
          }
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
