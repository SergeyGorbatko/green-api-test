import { useDispatch } from "react-redux";
import {
  useLazyGetSettingsQuery,
  useLazyGetStateInstanceQuery,
} from "../../services/green-api";
import { useAppSelector } from "../../store";
import { updateInstanceId, updateApiTokenInstance } from "./instance.slice";

export default function InstanceForm() {
  const { id: instanceId, token: ApiTokenInstance } = useAppSelector(
    (state) => state.instance,
  );
  const dispatch = useDispatch();

  const [getSettings, getSettingsState] = useLazyGetSettingsQuery();
  const [getStateInstance, getStateInstanceState] =
    useLazyGetStateInstanceQuery();

  const isLoading =
    getSettingsState.isLoading || getStateInstanceState.isLoading;

  const isFetching =
    getSettingsState.isFetching || getStateInstanceState.isFetching;

  return (
    <div className="col">
      <input
        placeholder="idInstance"
        value={instanceId}
        onChange={(e) => dispatch(updateInstanceId(e.target.value))}
      />
      <input
        placeholder="ApiTokenInstance"
        value={ApiTokenInstance}
        onChange={(e) => dispatch(updateApiTokenInstance(e.target.value))}
      />

      <button
        disabled={isLoading || isFetching}
        onClick={() => getSettings(instanceId)}
      >
        Get Settings
      </button>
      <button
        disabled={isLoading || isFetching}
        onClick={() => getStateInstance(instanceId)}
      >
        Get State Instance
      </button>
    </div>
  );
}
