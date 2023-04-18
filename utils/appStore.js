import {create} from "zustand";
import { axios1 } from "./axios";
import { FIRESTORE_DB } from './firebaseConfig'
import { collection, query, where,getDocs,addDoc,getDoc,doc} from "firebase/firestore";

const useStore = create((set,get) => ({
    data: [],
    cart: [],
    user : [],
    currentStore : "",
    loading: false,
    hasErrors: false,
    setUserProfile : (key,val)=>{
      set((state) => ({ user: {...state.user,[key] : val}  }));
    },
    fetchCart : async ()=>{
      set(() => ({ loading: true }));
      try {
        const productRef = collection(FIRESTORE_DB, "cart");
        const q = query(productRef, where("user_id", "==",get().user.userid));
        const querySnapshot = await getDocs(q);
        const cart_data = []
        if(querySnapshot.isEmpty) console.log('empty')
        querySnapshot.forEach(async (docu) => {
        // doc.data() is never undefined for query doc snapshots
        const docRef =  doc(FIRESTORE_DB, "products", docu.data().product_id);
        const docSnap = await getDoc(docRef);
        console.log(docSnap)
        if (docSnap.exists()) {
                  console.log(docSnap.data())
                  cart_data.push({...docu.data(),...docSnap.data(),cart_id : docu.id})
                  
                } else {
                  // docSnap.data() will be undefined in this case
                  console.log("No such document!");
                }
        
        });

        
        
        set(()=>({cart : cart_data}))
        set(() => ({ loading: false }));

            }catch (err) {
              console.log(err)
            }

    },
    setCurrentStore : async ()=>{
      console.log(get().cart.length)
      if(get().cart.length > 0){
      const userRef = doc(FIRESTORE_DB, "users",get().cart[0].userId);
        const userSnap = await getDoc(userRef);

        
        if (userSnap.exists()) {
            console.log(userSnap.data())
            set(()=>({currentStore : userSnap.data().storename}))
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
        }else{
          set(()=>({currentStore : ""}))
        }
        

    },
    addToCart : async (prod_id,user_id,count,sname)=>{
          try {
            const res = await addDoc(collection(FIRESTORE_DB,"cart"),{
              user_id : user_id,
              product_id : prod_id,
              count : count
          })

          set(()=>({currentStore : sname}))
          console.log(res)
          } catch (error) {
            console.log(error)
          }
    },
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
    setUser : (userdata)=>{
      set((state)=>({user : (state.user = userdata)}))
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