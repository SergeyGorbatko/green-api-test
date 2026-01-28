import {useDispatch} from 'react-redux';
import './App.css'
import { useAppSelector} from './store'
import {useLazyGetSettingsQuery} from './services/greenApi';
import {updateApiTokenInstance, updateInstanceId} from './features/Instance/instance.slice';

function App() {
  const { instanceId, ApiTokenInstance } = useAppSelector((state) => state.instance);
  const dispatch = useDispatch();

  const [trigger, { isLoading, isFetching }] = useLazyGetSettingsQuery();

  const { value } = useAppSelector((state) => state.log);

  return (
    <>
      <input
        placeholder="idInstance"
        value={instanceId}
        onChange={(e) => dispatch(updateInstanceId(e.target.value))}
       />
      <input
        placeholder='ApiTokenInstance'
        value={ApiTokenInstance}
        onChange={(e) => dispatch(updateApiTokenInstance(e.target.value))}
       />

      <button disabled={isLoading || isFetching} onClick={() => trigger()}>Get Settings</button>
      <button disabled={isLoading || isFetching} onClick={() => trigger()}>Get State Instance</button>

      <div>
        <input readOnly value={value}/>
      </div>
    </>
  )
}

export default App
