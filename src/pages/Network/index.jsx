import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { MdAddLink } from "react-icons/md";
import { toast } from "react-toastify";

import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

export function Network() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data().facebook);
          setInstagram(snapshot.data().instagram);
          setYoutube(snapshot.data().youtube);
        }
      });
    }
    loadLinks();
  }, []);

  function handleSave(e) {
    e.preventDefault();
    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
    })
      .then(() => {
        toast.success("The links have been saved");
        console.log("Success");
      })
      .catch((error) => {
        toast.error("Error, the links haven't saved");
        console.log("Error" + error);
      });
  }

  return (
    <Container>
      <Header />
      <h1>Your social medias</h1>
      <form onSubmit={handleSave}>
        <label>Facebook link</label>
        <Input
          placeholder="Type your facebook url"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <label>Instagram link</label>
        <Input
          placeholder="Type your Instagram url"
          valye={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <label>Youtube link</label>
        <Input
          placeholder="Type your Youtube url"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        <button type="submit">
          Save links <MdAddLink size={24} color="#fff" />
        </button>
      </form>
    </Container>
  );
}
