import './App.css';
import { ColorModeContext,useMode } from './theme';
import { CssBaseline,ThemeProvider } from '@mui/material';
import Navbar from './screens/global/Navbar';
import Sidebar from './screens/global/Sidebar';
import Dashboard from './screens/dashboard';
import Team from './screens/Team';
import Invoices from './screens/invoices';
import Contacts from './screens/contacts';
import Bar from './screens/bar';
import { Route,Routes } from 'react-router-dom';
import Form from './screens/form';
import Line from './screens/line';
import Pie from './screens/pie';
import FAQ from './screens/faq';
import Geography from './screens/geography';
import Calendar from './screens/calendar'; 
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>  
    <div className="app">
      <Sidebar/>
     <main className='content'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/invoices' element={<Invoices/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/bar' element={<Bar/>}/>
        <Route path='/pie' element={<Pie/>}/>
        <Route path='/line' element={<Line/>}/>
        <Route path='/geography' element={<Geography/>}/>
      </Routes>
     </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
