import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('api', {
  // 필요한 API를 노출
});
