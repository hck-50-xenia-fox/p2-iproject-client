import { app, database } from "./firebase-sdk"
import { collection, addDoc, getDocs, doc, updateDoc } from "firebase/firestore"


export default function App() {
    const [data, setData] = useState({});
    const collectionRef = collection(database, 'users');
  
    const handleInput = (event) => {
      let newImput = { [event.target.name]: event.target.value};
  
      setData ({ ...data, ...newImput});
    }
    
    const handleSubmit = () => {
      addDoc(collectionRef, {
        email: data.email,
        password: data.password
      })
      .then(() => {
        alert("Data Added")
      })
      .catch((err) => {
        alert(err.message)
      })
    }

    const getData = () => {
        getDocs(collectionRef)
        .then((response) => {
            console.log(response.docs.map((item) => {
                return {...item.data(), id: item.id}
            }))
        })
    }



  }