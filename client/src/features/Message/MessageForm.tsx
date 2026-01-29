import { useDispatch } from "react-redux";
import { useSendMessageMutation } from "../../services/green-api";
import { useAppSelector } from "../../store";
import { updateChatId, updateMessage } from "./message.slice";

export default function MessageForm() {
  const { id: instanceId } = useAppSelector((state) => state.instance);

  const { chatId, message } = useAppSelector((state) => state.message);
  const dispatch = useDispatch();

  const [sendMessage, { isLoading }] = useSendMessageMutation();

  return (
    <div className="col">
      <input
        placeholder="chatId"
        value={chatId}
        onChange={(e) => dispatch(updateChatId(e.target.value))}
      />
      <input
        placeholder="message"
        value={message}
        onChange={(e) => dispatch(updateMessage(e.target.value))}
      />

      <button
        disabled={isLoading}
        onClick={() => sendMessage({ instanceId, body: { chatId, message } })}
      >
        Send Message
      </button>
    </div>
  );
}
