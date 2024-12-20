import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main"
import Ingrediens from './components/Ingrediens/Ingredians'
import LatestNews from "./components/LatestNews/LatestNews";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
    <Header/>
    <Main/>
    <Ingrediens/>
    <LatestNews/>
    <Footer/>
    </>
  );
}
