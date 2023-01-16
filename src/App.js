// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  //  
  return (
    <>
    {/* <Header bgColor='red' textColor='blue' /> */}
    <Header />
      <div className="App">
                  {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                      Edit <code>src/App.js</code> and save to reload.
                    </p>   
                    <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn React
                    </a>
                  </header> */}
        {/* ternary operator, "no" can be replaced with *null* which can be removed by removing "?" with "&&" we can also put the content---> JSX in the conditional in a variable and use it
        like : {loading && variablename}*/}


        {/* {loading && ( 
        <div className='comments'>
          <h3>Comments({comments.length})</h3>
          <ul>
            {comments.map((comment, index)=>(
                <li key={index}>{comment.text}</li>
            ))}
          </ul>
        </div>) } */}
        
      </div>
    </>
  )
 }

export default App;
