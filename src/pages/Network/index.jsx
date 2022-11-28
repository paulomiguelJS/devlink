import { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Container } from "./styles";

import { MdAddLink } from "react-icons/md";
import { toast } from "react-toastify";

import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { Button } from "../../components/Button";

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
        setFacebook("");
        setInstagram("");
        setYoutube("");
      })
      .catch((error) => {
        toast.error("Error, the links haven't saved");
        console.log("Error" + error);
      });
  }

  return (
    <Container>
      <Header />
      <h2>Your social medias</h2>
      <form onSubmit={handleSave}>
        <label>Facebook </label>
        <Input
          placeholder="Facebook URL"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <label>Instagram URL</label>
        <Input
          placeholder="Instagram URL"
          valye={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <label>Youtube URL</label>
        <Input
          placeholder="Youtube URL"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />
        <Button type="submit" title="Save URLs">
          <MdAddLink size={24} color="#fff" />
        </Button>
      </form>
    </Container>
  );
}
