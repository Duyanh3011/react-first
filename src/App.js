import logo from './logo.svg';
// import './App.css';
import './components/FunctionComponent'
import FunctionComponent from './components/FunctionComponent';
import Gallery, { Profile, Profile1 } from './components/Gallery';
import Header from './components/Header';
import StateDemo from './components/useState/StateDemo';
import Vidu1 from './components/useState/Vidu1';
import Box from './components/Props/Box';
import PropsDemo from './components/Props/PropsDemo';
// import UseEffectDemo from './components/useEffect/UseEffectDemo';
import Avatar from './components/Props/Avatar';

export const items = [
  {
    name: 'To Hai Ha',
    gender: true,
    image: '../image/img1.png'
  },
  {
    name: 'Vu Nam Anh',
    gender: true,
    image: '../image/img2.png'
  },
  {
    name: 'Lai thi teo',
    gender: false,
    image: '../image/img3.png'
  }
];
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>

      <Header />

      <Avatar
        name='Tran an Ninh'
        gender={true}
        image='../image/img1.png'
      />

      {/* <UseEffectDemo/> */}
      {items.map((item) => (
        <Avatar name={item.name} gender={item.gender} image={item.image} />
      ))}
    <hr />

      <PropsDemo />
      <Vidu1/>
      <hr />

      <StateDemo />
      <hr />
      
      <h2>Hello Component</h2>
      <FunctionComponent />

      <hr />
      <h3>
        Export default
        <Gallery />
      </h3>
      <hr />
      <h3>
        Export name
        <Profile />
      </h3>

    </div>
  );
}

export default App;
