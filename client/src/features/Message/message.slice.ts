import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MessageState {
  chatId: string;
  message: string;
}

const initialState: MessageState = {
  chatId: "",
  message: "",
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    updateChatId: (state, action: PayloadAction<string>) => {
      state.chatId = action.payload;
    },
    updateMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { updateChatId, updateMessage } = messageSlice.actions;

export default messageSlice.reducer;
