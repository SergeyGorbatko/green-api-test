import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MessageState {
  chatId: string;
  urlFile: string;
}

const initialState: MessageState = {
  chatId: "",
  urlFile: "",
};

export const messageSlice = createSlice({
  name: "message-file",
  initialState,
  reducers: {
    updateChatId: (state, action: PayloadAction<string>) => {
      state.chatId = action.payload;
    },
    updateUrl: (state, action: PayloadAction<string>) => {
      state.urlFile = action.payload;
    },
  },
});

export const { updateChatId, updateUrl } = messageSlice.actions;

export default messageSlice.reducer;
