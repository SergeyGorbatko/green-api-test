import { useDispatch } from "react-redux";
import { useSendFileByUrlMutation } from "../../services/green-api";
import { useAppSelector } from "../../store";
import { updateChatId, updateUrl } from "./message-file.slice";

export default function MessageFileForm() {
  const { id: instanceId } = useAppSelector((state) => state.instance);

  const { chatId, urlFile } = useAppSelector((state) => state.messageFile);
  const dispatch = useDispatch();

  const [sendFileByUrl, { isLoading }] = useSendFileByUrlMutation();

  return (
    <div className="col">
      <input
        placeholder="chatId"
        value={chatId}
        onChange={(e) => dispatch(updateChatId(e.target.value))}
      />
      <input
        placeholder="urlFile"
        value={urlFile}
        onChange={(e) => dispatch(updateUrl(e.target.value))}
      />

      <button
        disabled={isLoading}
        onClick={() => sendFileByUrl({ instanceId, body: { chatId, urlFile } })}
      >
        Send File By Url
      </button>
    </div>
  );
}
