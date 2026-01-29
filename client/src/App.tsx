import "./App.css";
import { useAppSelector } from "./store";
import InstanceForm from "./features/Instance/InstanceForm";
import MessageForm from "./features/Message/MessageForm";

function App() {
  const { value } = useAppSelector((state) => state.log);

  return (
    <div className="row">
      <div className="col gap-xl">
        <InstanceForm />
        <MessageForm />
      </div>
      <div className="col">
        <textarea readOnly value={JSON.stringify(value, null, 2)} />
      </div>
    </div>
  );
}

export default App;
