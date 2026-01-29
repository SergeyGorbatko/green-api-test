import "./App.css";
import { useAppSelector } from "./store";
import InstanceForm from "./features/Instance/InstanceForm";

function App() {
  const { value } = useAppSelector((state) => state.log);

  return (
    <div className="row">
      <div className="col">
        <InstanceForm />
      </div>
      <div className="col">
        <textarea readOnly value={JSON.stringify(value, null, 2)} />
      </div>
    </div>
  );
}

export default App;
