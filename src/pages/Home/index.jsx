import { useState, useEffect } from "react";
import { Container, LinksContainer } from "./styles";
import { Social } from "../../components/Social";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Logo } from "../../components/Logo";

import { db } from "../../services/firebaseConnection";
import {
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc,
} from "firebase/firestore";

export function Home() {
  const [links, setLinks] = useState([]);
  const [socialLinks, setSocialLinks] =  useState({});

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));
      getDocs(queryRef).then((snapshot) => {
        let list = [];
        snapshot.forEach((doc) =>
          list.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color,
          })
        );
        setLinks(list);
      });
    }
    loadLinks();
  });

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setSocialLinks({
            facebook: snapshot.data().facebook,
            instagram: snapshot.data().instagram,
            youtube: snapshot.data().youtube,
          });
        }
      });
    }
    loadSocialLinks();
  }, []);

  return (
    <Container>
      <Logo />
      <span>See my links</span>
      <LinksContainer>
        {links.map((item, id) => (
          <section key={id} style={{ backgroundColor: item.bg }}>
            <a href={item.url} target="blank">
              <p style={{ color: item.color }}>{item.name}</p>
            </a>
          </section>
        ))}
      </LinksContainer>

      {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
        <footer>
          <Social url={socialLinks?.facebook} target="blank">
            <FaFacebook size={35} color="#FFF" />
          </Social>
          <Social url={socialLinks?.instagram} target="blank">
            <FaInstagram size={35} color="#FFF" />
          </Social>
          <Social url={socialLinks?.youtube} target="blank">
            <FaYoutube size={35} color="#FFF" />
          </Social>
        </footer>
      )}
    </Container>
  );
}
