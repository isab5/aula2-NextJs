import styles from "../styles/page.module.css";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer"
import Image from "next/image";
import Bannerkfc from "../public/img/Bannerkfc.jpg"

export default function Home() {
  return (
    <div className={styles.body}>
      <main>
        <Header props="Cardápio KFC"/>
        <div className={styles.main}>
        <aside className={styles.cards}>
        <Card title="MINIBALDE" content="8 tirinhas ou 4 tirinha + 2 pedaços" />
        <Card title="BALDE" content="12 Tirinhas ou 8 Pedaços ou 6 Tirinhas + 4 Pedaços " />
        <Card title="MEGABALDE" content="16 Tirinhas ou 12 Pedaços ou 8 Tirinhas + 6 Pedaços" />
        <Card title="MINIBALDE com Fritas" content="4 Tirinhas com Fritas" />
        <Card title="BATATA FRITA NO BALDE" content="Batata Frita" />
        </aside>
        <Image className={styles.img} src={Bannerkfc} alt="banner do KFC" />
        </div>
      <Footer props="Footer" />
      </main>
    </div>
  );
}
