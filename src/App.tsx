import {useDispatch} from 'react-redux';
import './App.css'
import { useAppSelector} from './store'
import {updateApiTokenInstance, updateInstanceId} from './features/Parameters/parameters.slice';

function App() {
  const { instanceId, ApiTokenInstance } = useAppSelector((state) => state.parameters);
  const dispatch = useDispatch();

  const [trigger, { data, error, isLoading, isFetching }] = useGetSettingsQuery();


  return (
    <>
      <label>
        Instance Id
        <input value={instanceId} onChange={(e) => dispatch(updateInstanceId(e.target.value))} />
        </label>
      <label>
        API Token Instance
        <input value={ApiTokenInstance} onChange={(e) => dispatch(updateApiTokenInstance(e.target.value))} />
      </label>

      <button disabled={isLoading || isFetching} onClick={trigger}>Get Settings</button>
      <button disabled={isLoading || isFetching} onClick={trigger}>Get State Instance</button>

'
      <div>
        <input />
      </div>
    </>
  )
}

export default App
