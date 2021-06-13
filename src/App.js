import './App.css';
import Dashboard from './views/Dashboard/Dashboard';
import Skills from './views/Skills/Skills';
import MyProjects from './views/MyProjects/MyProjects';
import Navigation from './components/Navigation/Navigation';
import dataJSON from './assets/data.json';
import { connect } from 'react-redux';
import NavigationSide from './components/NavigationSide/NavigationSide';
import Sertificates from './views/Sertificates/Sertificates';
import Contact from './views/Contact/Contact';

const switchDisplay = (display) => {
  switch (display) {
    case 'Dashboard':
      return <Dashboard data={dataJSON.dashboard} />;
    case 'Skills':
      return <Skills data={dataJSON.mySkills} />;
    case 'MyProjects':
      return <MyProjects data={dataJSON.myProject} />;
    case 'Sertificates':
      return <Sertificates data={dataJSON.sertificates} />;
    case 'Contact':
      return <Contact data={dataJSON.contact} />;

    default:
      <p>Kosong</p>;
  }
};

function App({ display }) {
  return (
    <div className="App">
      <Navigation />
      <NavigationSide />
      {switchDisplay(display)}
    </div>
  );
}

const reduxState = (state) => {
  return {
    display: state.display,
  };
};

export default connect(reduxState)(App);
