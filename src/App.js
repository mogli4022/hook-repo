import './App.css';
// import Counter from './Component/Usestate/Counter';
import Array from './Component/Usestate/Array';
import { Home } from './Component/Usestate/costomHook/CostomHook';
import UseContectComponent from './Component/Usestate/useContex/UseContext';
import LocalStorage from './Component/Usestate/UseEffect/Localstorage';
import Mouseeffect from './Component/Usestate/UseEffect/Mouseeffct';
import UnMountEffect from './Component/Usestate/UseEffect/unMountEffect'
import UseMemo from './Component/Usestate/UseMemo/UseMemo';
import UseReducer from './Component/Usestate/UseReducer';
import UseRef from './Component/Usestate/UseRef';
function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Array/> */}
      {/* <Mouseeffect/> */}
      {/* <LocalStorage></LocalStorage> */}
      {/* <UnMountEffect/> */}
      {/* <UseContectComponent/> */}
      {/* <UseRef /> */}
      {/* <UseReducer /> */}
      {/* <UseMemo /> */}
      <Home />
    </div>
  );
}
export default App;
