import {create} from "zustand";
import { axios1 } from "./axios";

const useStore = create((set) => ({
    data: [],
    loading: false,
    hasErrors: false,
    fetch: async (code) => {
      set(() => ({ loading: true }));
      try {
        const response = await axios1.get(
          `https://caringstore.xyz/api/getq/${code}`
        );
        

        set((state) => ({ data: (state.data = response.data), loading: false }));
      } catch (err) {
        set(() => ({ hasErrors: true, loading: false }));
      }
    },
    updateComments : (index,comment)=>{
        set(state => ({
            data: state.data.map((item,i) => {
              if (i === index) {
                return {
                  ...item,
                  comment: comment,
                };
              } else {
                return item;
              }
            })
          }))
    },
    setLoading : (status)=>{
        set(()=>({loading : status}))
    }
  }));


export default useStore;