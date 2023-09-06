import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "5e3adb88f234483da874878df2a4d670"
const token = "007eJxTYJBeseaZyJ6+Zt+U90d/Rh1gKrL3Kzmh43H9esHGmS4XN2xRYDBNNU5MSbKwSDMyNjGxME5JtDA3sTC3SEkzSjRJMTM3eNTxI6UhkJGhmm0fIyMDBIL4zAyJlYkMDAC6UCEQ"

export const config = {mode: "rtc", codec: "vp8", appId: appId, token: token};
//those are hooks
//i used them so we can access them fom other components
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "aya";