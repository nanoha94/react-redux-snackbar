import Router from './Router';
import Header from './components/Header';
import OpenSnackbar from './components/OpenSnackbar';
import { useSelector } from 'react-redux';
import { snackbarData } from './redux/store';

function App() {
  const snackbarSelector = useSelector(snackbarData);
 

  return (
    <>
    <Header />
    <main>
      <Router/>
    </main>
    <OpenSnackbar
        open={snackbarSelector.isOpen}
        alertType={snackbarSelector.alertType}
        message={snackbarSelector.message}
      />
    </>
  );
}

export default App;
