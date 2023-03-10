import './App.css';
import FragmentDemo from './components/FragmentDemo';
import LifeCycleA from './components/LifeCycleA';
import Table from './components/Table';

function App() {
  return (
    <>
      {/* Component Mounting Life Cycle Methods */}
      {/* <LifeCycleA/> */}

      {/* Fragements */}
      <FragmentDemo/>
      <Table/>
    </>
  );
}

export default App;
