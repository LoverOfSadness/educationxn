import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HeadderX from "@/components/headerx";
import CarouselRow from "@/components/homebnr";
import Founder from "@/components/founder";
import {Carousel} from "react-bootstrap";
import CourceList from "@/components/courcesbnnr";
import CarouselRow2 from "@/components/homebnr2";
import Slider from "@/components/Slider";
import Homebnr from "@/components/homebnr";
import Clienntsay from "@/components/clienntsay";
import Futter from "@/components/futter";
import AboutUs from "@/components/AboutUs";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const cards = [
        {
            image: 'image1.jpg',
            title: 'Card 1',
            content: 'Content for Card 1',
        },
        {
            image: 'image2.jpg',
            title: 'Card 2',
            content: 'Content for Card 2',
        },
        {
            image: 'image2.jpg',
            title: 'Card 2',
            content: 'Content for Card 2',
        },
        {
            image: 'image2.jpg',
            title: 'Card 2',
            content: 'Content for Card 2',
        },
        {
            image: 'image2.jpg',
            title: 'Card 2',
            content: 'Content for Card 2',
        },
        // Add more cards as needed
    ];

    return (
    <>

      <HeadderX/>


        <Homebnr/>

        <Founder/>

        <CourceList/>
        <CarouselRow2/>

        <Slider/>
        {/*<Clienntsay/>*/}


        <Futter/>




    </>

  )
}
