import { create } from "zustand";

type featureFormData = {
  材质: FormDataEntryValue | null;
  厚度: FormDataEntryValue | null;
  坡口角度: FormDataEntryValue | null;
  钝边: FormDataEntryValue | null;
  间隙: FormDataEntryValue | null;
  直径: FormDataEntryValue | null;
  增透剂: FormDataEntryValue | null;
} | null;

interface useProcedureStoreInterface {
  isLoading: boolean,
  predictProcedure: {
    '焊接角度': number,
    '峰值电流': number,
    '基值电流': number,
    '峰值丝速': number,
    '基值丝速': number,
    '峰值比例%': number,
    '摆动速度': number,
    '左侧停留': number,
    '焊接速度': number,
    '脉冲频率': number,
    '摆动幅度': number,
    '右侧停留': number
  },
  // uploadProcedure: null,

  fetchPredictProcedure: (formData: featureFormData) => Promise<void>,
  uploadProcedure: (formData) => void,
  resetProcedure: () => void
}

const useProcedure = create<useProcedureStoreInterface>((set) => ({
  isLoading: false,
  predictProcedure: null,
  // uploadProcedure: null,

  fetchPredictProcedure: async (formData) => {
    set({ isLoading: true });
    
    try {
      // 调用Flask API
      const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('API请求失败');
      }
      
      const data = await response.json();
      set({ predictProcedure: data, isLoading: false });
    } 
    catch (error) {
      console.log(error);
      set({ isLoading: false })
    } 
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  uploadProcedure: async (formData) => {
    set({ isLoading: true });
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('上传API请求失败');
      }
      
      await response.json();
      set({ isLoading: false });
    } catch (error) {
      console.log(error);
      set({ isLoading: false });
    }
  },
  resetProcedure: () => set({ predictProcedure: null })
}));

export {
  useProcedure
}