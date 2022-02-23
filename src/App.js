import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import './App.css';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
    <EventBind />
    {/* <FunctionClick />
    <ClassClick /> */}
    {/* <Counter /> */}
    {/* <Message /> */}
     {/* <Greet name="Bob" heroName="Superman">
       <p>this is children props</p>
     </Greet>
     <Greet  name="Jane" heroName="Superwoman">
       <button>action btn</button>
     </Greet>
     <Greet  name="Joy" heroName="Superboy"/> */}
     {/* <Welcome name="Luffy" heroName="JoyBoy"/> */}
    </div>
  );
}

export default App;
