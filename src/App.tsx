import './App.css';
import Footer from './components/layout/Footer';
import ProviderTablePage from "./pages/ProviderTablePage"

function App() {
  return (
    <div className='w-full h-screen bg-slate-50 p-16'>
      <ProviderTablePage />
      <Footer />
    </div>
  );
}

export default App;
