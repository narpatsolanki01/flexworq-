import Routes from './Routes/Index';
import './Assets/Css/style.css';
import './Assets/Css/Layout.css';
import { SnackbarProvider } from 'notistack';
function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={10} anchorOrigin={{vertical: 'top',horizontal: 'right'}} preventDuplicate>
        <Routes />
      </SnackbarProvider>
    </div>
  );  
}

export default App;
