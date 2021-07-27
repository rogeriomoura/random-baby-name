import './App.css';
import { boys } from './boysArray';
import { girls } from './girlsArray';

const getGirlName = () => girls[Math.floor(Math.random() * girls.length)];
const getBoyName = () => boys[Math.floor(Math.random() * boys.length)];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Random Baby Name Generator</h1>
      </header>
      <body className='App-body'>
        <div
          id='babyName'
          style={{
            backgroundColor: 'whitesmoke',
            marginBottom: 30,
            borderRadius: 8,
            textAlign: 'center',
            width: 500,
            height: 200,
            fontSize: 32,
            fontFamily: 'roboto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        ></div>
        <div style={{ flexDirection: 'row' }}>
          <button
            style={{
              padding: 100,
              backgroundColor: 'blue',
              marginRight: 30,
              borderRadius: 8,
              fontFamily: 'roboto',
              fontSize: 32,
              color: 'pink',
              borderColor: 'white',
              borderWidth: 3,
            }}
            onClick={() => {
              const firstName = getBoyName();
              let middleName = getBoyName();
              document.getElementById(
                'babyName'
              ).innerHTML = `${firstName} ${middleName}`;
            }}
          >
            Boy
          </button>
          <button
            style={{
              padding: 100,
              backgroundColor: 'pink',
              borderRadius: 8,
              fontFamily: 'roboto',
              fontSize: 32,
              borderColor: 'white',
              borderWidth: 3,
              color: 'blue',
            }}
            onClick={() => {
              const firstName = getGirlName();
              let middleName = getGirlName();
              document.getElementById(
                'babyName'
              ).innerHTML = `${firstName} ${middleName}`;
            }}
          >
            Girl
          </button>
        </div>
      </body>
    </div>
  );
}

export default App;
