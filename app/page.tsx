'use client';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
export default function Home() {
  const textList = [
    { title: 'Find text within images', progressTitle: "Text Recognition", desc: 'Search any keyword you remember from a meme, handwritten notes or photo containing text, and mymind can read the image and find it for you.' },
    { title: 'Write in peace', progressTitle: "Focus Mode", desc: "Focus Mode gives you a clean, fresh space to write without distractions. Use it to journal, write longer drafts or expand on your notes. " },
    { title: 'Save highlights with a click', progressTitle: "Saving Highlights", desc: "Highlight a passage or quote you want to remember from an article or newsletter. mymind will file it away for you, so you can keep reading. " },
    { title: 'Share a piece of your mind', progressTitle: "Private Share Link", desc: "Everything you save is private. But if you’d like to share a piece of your mind with a friend, you can send a link that expires within 24 hours." },
  ];
  const imgList = [
    'url(/progressImg/feature-text-recognition-desktop.webp)',
    'url(/progressImg/feature-focus-mode-desktop.webp)',
    'url(/progressImg/feature-saving-highlights-desktop.webp)',
    'url(/progressImg/feature-private-share-link-desktop.webp)',
  ]

  const useCaseTextList = [
    {
      Navtitle: "Marketers", imgTitle: "MADE FOR MARKETERS", imgDesc: "Save and find quotes & highlights that inspire you."
    },
    {
      Navtitle: "Designers", imgTitle: "MADE FOR DESIGNERS", imgDesc: "Create instant, boundless visual moodboards."
    },
    {
      Navtitle: "Writers", imgTitle: "MADE FOR WRITERS", imgDesc: "Write without distractions."
    },
    {
      Navtitle: "Researchers", imgTitle: "MADE FOR RESEARCHERS", imgDesc: "Collect all your research & references in one place."
    },
    {
      Navtitle: "Developers", imgTitle: "MADE FOR DEVELOPERS", imgDesc: "Your private resource & reference hub."
    },
    {
      Navtitle: "Everyone", imgTitle: "MADE FOR EVERYONE", imgDesc: "A place for everything you want to remember."
    }
  ]

  const useCaseImgList = [
    'url(/useCaseImg/for_Marketers_neue01-1.jpg)',
    'url(/useCaseImg/for_designers_neue01-1.jpg)',
    'url(/useCaseImg/for_writers_neue03.jpg)',
    'url(/useCaseImg/for_researchers_neue01-1.jpg)',
    'url(/useCaseImg/for_developers_neue01-1.jpg)',
    'url(/useCaseImg/for_everyone_neue01-1-1.jpg)'
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [useCaseIndex, setUseCaseIndex] = useState(0);
  useEffect(() => {
    const newTimer = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 0.8);
      } else {
        clearInterval(newTimer);
        setProgress(0);
        setCurrentIndex(prevIndex => (prevIndex + 1) % imgList.length);
      }
    }, 40);


    return () => clearInterval(newTimer);
  }, [progress, currentIndex, imgList.length]);

  const handleSwitchIndex = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  return (
    <main className="flex py-[1.8rem] pb-0  min-h-screen main-shadow w-full flex-col items-center justify-between max-w-[1440px]">
      <section className="px-[3.8rem]  flex flex-col w-full h-full items-center justify-center">
        <header className=" w-full h-fit flex items-center justify-between">
          <Link href='/' className="flex items-center justify-center">
            <Image src='/logo.png' width={30} height={30} alt="logo"></Image>
            <span className=" font-bold">turnitpass</span>
          </Link>
          <div className="flex text-gray-500 items-center justify-center gap-8">
            <div className="flex items-center group justify-center gap-2 relative">
              <div className="header-link-dot bg-[#ff5924] group-hover:shadow-[0_0_2px_1px_#ff5924]"></div>
              <Link href='#' className="hover:text-zinc-950 duration-300 transition-all">What</Link>
            </div>
            <div className="flex items-center group justify-center gap-2 relative">
              <div className="header-link-dot bg-[#FFE926] group-hover:shadow-[0_0_2px_1px_#FFE926]"></div>
              <Link href='#' className="hover:text-zinc-950 duration-300 transition-all">Why</Link>
            </div>
            <div className="flex items-center group justify-center gap-2 relative">
              <div className="header-link-dot bg-[#FF7DD3] group-hover:shadow-[0_0_2px_1px_#FF7DD3]"></div>
              <Link href='#' className="hover:text-zinc-950 duration-300 transition-all">How</Link>
            </div>
            <div className="flex items-center group justify-center gap-2 relative">
              <div className="header-link-dot bg-[#5CB13E] group-hover:shadow-[0_0_2px_1px_#5CB13E]"></div>
              <Link href='#' className="hover:text-zinc-950 duration-300 transition-all">What&apos;s New</Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link href='#' className=" cursor-pointer">Log in</Link>
            <Link href='#' className=" bg-[#008DDA] text-white duration-300 transition-all hover:shadow-[0px_2px_8px_#008DDA] px-4 py-1 cursor-pointer rounded-full">Sign up</Link>
          </div>
        </header>
        <h1 className=" mt-[12rem]">
          Remember everything.
        </h1>
        <h1 className=" mt-[2rem]">
          Organize nothing.
        </h1>
        <p className=" leading-[3rem] text-[1.1rem] tracking-[0] text-[#525151] mt-[4rem] text-center">
          All your&nbsp;
          <span className=" !font-[500] bubble text-[#E98F53] border border-[#E98F53]">notes</span>&nbsp;
          <span className=" !font-[500] bubble text-[#E48ABF] border border-[#E48ABF]">bookmarks</span>&nbsp;
          <span className=" !font-[500] bubble text-[#99D2FB] border border-[#99D2FB]">inspiration</span>&nbsp;<br></br>
          <span className=" !font-[500] bubble text-[#EA726B] border border-[#EA726B]">articles</span> and&nbsp;
          <span className=" !font-[500] bubble text-[#FFCF27] border border-[#FFCF27]">images</span>&nbsp;
          in one single, private place.
        </p>
        <div className=" mt-16 w-[1098px] h-[778px] flex items-center justify-center border-dashed border-2 border-[#008DDA] rounded-lg" >
          <h1>Vedio here</h1>
        </div>
      </section>
      <section className="flex mt-32  flex-col w-full px-[16.2rem] h-full items-center justify-center">
        <span className="section-title-2">OUR MANIFESTO</span>
        <div className=" w-full h-full mt-16 flex flex-col items-center justify-center gap-8">
          <span className="text-[2rem] text-zinc-700 ">
            <span className=" text-[4rem] font-bold text-zinc-700 leading-[0px] italic">&nbsp;In&nbsp;</span>
            a time when every company has a bid on our data, when we exchange our privacy for information, when every move we make is influenced by how others will perceive it, we have little space to call our own.
          </span>
          <p className="text-[2rem] text-zinc-600 self-start">
            Our minds have been taken captive –
          </p>
          <p className="text-[2rem] text-zinc-600">
            by social approval systems, by newsfeeds and timelines, by advertisements and corporate agendas. Our information is scattered across platforms, bound by terms and conditions.
          </p>
          <p className="text-[2rem] text-zinc-600 self-start">
            What should have never been lost is now yours again. <span className="font-bold text-zinc-700 leading-[0px]">We promise:</span>
          </p>
        </div>
        <div className=" w-fit h-full mt-16 text-[2.2rem] text-zinc-800 flex flex-col items-start justify-center gap-4">
          <span>
            <span className="font-bold text-[3rem] mr-2 text-[#008DDA] leading-[0px]">No</span>
            social features
          </span>
          <span>
            <span className="font-bold text-[3rem] mr-2 text-[#008DDA] leading-[0px]">No</span>
            vanity metrics
          </span>
          <span>
            <span className="font-bold text-[3rem] mr-2 text-[#008DDA] leading-[0px]">No</span>
            tracking
          </span>
          <span>
            <span className="font-bold text-[3rem] mr-2 text-[#008DDA] leading-[0px]">No</span>
            social pressure
          </span>
          <span>
            <span className="font-bold text-[3rem] mr-2 text-[#008DDA] leading-[0px]">No</span>
            collaboration
          </span>
          <span>
            <span className="font-bold text-[3rem] mr-2 text-[#008DDA] leading-[0px]">No</span>
            ads
          </span>
        </div>
        <h2 className=" mt-32 italic font-semibold leading-[4rem] text-[4rem] ">Welcome to the<span className="text-[#008DDA]">Turn it pass</span> community !</h2>
        <Link href='#' className=" bg-[#008DDA] text-nowrap w-[8rem] hover:w-[8.5rem] mt-16 flex items-center justify-between text-white duration-300 transition-all hover:shadow-[0px_2px_8px_#008DDA] px-4 py-1 cursor-pointer rounded-full">
          join now
          <ArrowRight className=" h-4"></ArrowRight>
        </Link>
      </section>
      <section className="flex mt-32  flex-col px-[5.3rem] w-full h-full items-center justify-center gap-8">
        <h2 className="section-title-1">
          The first and only extension<br></br>
          for your real mind.
        </h2>
        <span className="section-title-3 max-w-[400px] text-wrap">
          One place for everything you care about.<br></br>
          No need to file it, label or even tag it. It’s all<br></br>
          magically organized and visualized for you.
        </span>
        <div className=" mt-16 w-[1098px] h-[778px] flex items-center justify-center border-dashed border-2 border-[#008DDA] rounded-lg" >
          <h1>Vedio here</h1>
        </div>
        <Link href='#' className="mt-16 text-nowrap w-fit flex items-center justify-between hover:text-[#008DDA] px-4 py-1 cursor-pointer">
          <div className="flex items-center mr-2 justify-center w-8 h-8 rounded-full bg-[#008DDA]">
            <Play className="h-4 text-white"></Play>
          </div>
          SEE THE MAGIC OF TURN IT PASS
        </Link>
      </section>
      <section className="flex py-[6rem]  px-[4rem] mt-32 bg-[#f6f4f2] flex-col w-full h-full items-center justify-center gap-8">
        <span className="section-title-2 text-[#008DDA]">IT JUST WORKS</span>
        <h2 className="section-title-1">
          Just save it. Artificial
          IntelligenceAtakes <span className="border-[5px] !text-[3rem] border-[#008DDA] text-[#008DDA] rounded-full">&nbsp;&nbsp;&nbsp;&nbsp;AI&nbsp;&nbsp;&nbsp;&nbsp;</span> takes<br></br>
          care of the rest.
        </h2>
        <span className="section-title-3 max-w-[400px] text-wrap">
          Save anything with a click and stay in the flow.
          mymind understands what it is and remembers
          the important details, so you don&apos;t have to.
        </span>
        <div className=" mt-16 w-[1098px] h-[778px] flex items-center justify-center border-dashed border-2 border-[#008DDA] rounded-lg" >
          <h1>Vedio here</h1>
        </div>
      </section>
      <section className="flex py-[6rem]  px-[4rem] bg-[#008DDA] flex-col w-full h-full items-center justify-center gap-8">
        <span className="section-title-2 ">NO WASTED TIME OR ENERGY</span>
        <h2 className="section-title-1">
          Folders are dead. This is your personal search engine.
        </h2>
        <span className="section-title-3 max-w-[400px] text-white text-wrap">
          Search by color, keyword, brand, date – whatever
          you think of first. Associative search & visual cues work
          with your brain to find it instantly.
        </span>
        <div className=" mt-16 w-[1098px] h-[778px] flex items-center justify-center border-dashed border-2 border-white rounded-lg" >
          <h1>Vedio here</h1>
        </div>
        <Link href='#' className="mt-16 text-nowrap w-fit flex items-center text-white justify-between hover:text-zinc-950 px-4 py-1 cursor-pointer">
          <div className="flex items-center mr-2 justify-center w-8 h-8 rounded-full bg-white">
            <Play className="h-4 text-zinc-950"></Play>
          </div>
          WATCH THE VIDEO
        </Link>
      </section>
      <section className="flex z-10 py-[6rem] pb-0 oasis-bg-gradient px-[2rem] bg-oasis-gradient w-full h-full items-center justify-center gap-8">
        <div className=" rounded-lg w-full h-full py-[6rem] pb-0 bg-white flex flex-col items-center justify-center">
          <span className="section-title-2 text-[#008DDA]">YOUR PRIVATE OASIS</span>
          <h2 className="section-title-1 px-[4rem]">
            A treasure trove of ideas,
            inspiration & references
          </h2>
          <div className=" mt-[5rem] w-full flex gap-8 flex-wrap items-center justify-center">
            <div className=" hover:scale-105 duration-300 transition-all cursor-pointer flex rounded-lg  max-w-[522.4px] h-[808.5px] px-12 bg-[#DDE9D3] flex-col gap-8 items-center justify-center">
              <Image className=" object-cover" width={422.5} height={424.5} src='/homeImg/features-frictionless-notetaking-1.webp' alt="features-frictionless-notetaking-1"></Image>
              <p className=" mt-12 self-start mb-[-1.5rem] tracking-tighter text-nowrap text-[2.2rem] font-semibold">Frictionless notetaking</p>
              <span className="text-[1.1rem] text-zinc-600">Ideas no longer slip away. Take quick notes on the go and enter Focus Mode to expand on them later. Clean and simple.</span>
            </div>
            <div className=" hover:scale-105 duration-300 transition-all cursor-pointer flex rounded-lg  max-w-[747.5px] h-[808.5px] p-6 bg-[#E5EAF2] flex-col gap-8 items-center justify-center">
              <Image className=" object-cover" width={647.5} height={428} src='/homeImg/features-smart-bookmarking.webp' alt="features-frictionless-notetaking-1"></Image>
              <p className="mt-12 self-start mb-[-1.5rem] tracking-tighter  text-nowrap text-[2.2rem] font-semibold">Frictionless notetaking</p>
              <span className="text-[1.1rem] text-zinc-600">Ideas no longer slip away. Take quick notes on the go and enter Focus Mode to expand on them later. Clean and simple.</span>
            </div>
            <div className=" hover:scale-105 duration-300 transition-all cursor-pointer flex rounded-lg  max-w-[747.5px] h-[808.5px] p-6 bg-[#F3F0E6] flex-col gap-8 items-center justify-center">
              <Image className=" object-cover" width={647.5} height={469.25} src='/homeImg/features-read-without-distractions.webp' alt="features-frictionless-notetaking-1"></Image>
              <p className="mt-12 self-start mb-[-1.5rem] tracking-tighter  text-nowrap text-[2.2rem] font-semibold">Frictionless notetaking</p>
              <span className="text-[1.1rem] text-zinc-600">Ideas no longer slip away. Take quick notes on the go and enter Focus Mode to expand on them later. Clean and simple.</span>
            </div>
            <div className=" hover:scale-105 duration-300 transition-all cursor-pointer flex rounded-lg  max-w-[522.4px] h-[808.5px] p-6 bg-[#DBE6FB] flex-col gap-8 items-center justify-center">
              <Image className=" object-cover" width={422.5} height={400} src='/homeImg/features-instant-collections.webp' alt="features-frictionless-notetaking-1"></Image>
              <p className="mt-12 self-start mb-[-1.5rem] tracking-tighter  text-nowrap text-[2.2rem] font-semibold">Frictionless notetaking</p>
              <span className="text-[1.1rem] text-zinc-600">Ideas no longer slip away. Take quick notes on the go and enter Focus Mode to expand on them later. Clean and simple.</span>
            </div>
          </div>
          <div style={{ backgroundImage: `${imgList[currentIndex]}` }} className=" bg-cover shadow-[0px_4px_7px_-4px_#8c8e9751] bg-repeat bg-center h-[800px] border-solid border-[#e4e8ec80] border rounded-lg mt-[2rem] p-12 w-full flex flex-col  items-start justify-between">
            <div className=" flex items-center justify-between w-full">
              {textList.map((text, index) => (
                <div key={index} className=" flex flex-col cursor-pointer" onClick={() => handleSwitchIndex(index)}>
                  <progress id="myProgress" className={`w-[15rem] duration-300 transition-all ${index === currentIndex && '!w-[20rem]'} h-[2px]`} value={index === currentIndex ? progress : 0} max="100" />
                  <h3 className={`text-[1.5rem] text-[#AFB5C1] duration-300 transition-all ${index === currentIndex && 'text-zinc-950'}`}>{text.progressTitle}</h3>
                </div>
              ))}
            </div>
            <div>
            </div>
            <div className="">
              {textList.map((text, index) => (
                <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
                  <h3 className=" text-[2.5rem] tracking-tighter">{text.title}</h3>
                  <p className=" w-[476px] text-wrap text-[1rem] text-[#4a5465]">{text.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fff1f1] relative w-full h-[1350px] flex flex-col items-center justify-center">
        <div className=" w-full relative h-full px-[4rem] py-[6rem] pb-0 flex flex-col items-center justify-center z-10">
          <h2 className=" text-[5rem] pt-16 tracking-tighter w-full text-center text-white">
            Trusted by thinkers<br></br>
            & doers everywhere.
          </h2>
          <motion.div
            className="absolute top-[0%] left-[25%] w-[620px] h-[230px]"
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            <Image width={620} height={230} className="" src='/commentImg/mymind-review-001.png' alt="comment1 img"></Image>
          </motion.div>
          <motion.div
            className="absolute top-[6%] left-[5%] w-[620px] h-[230px]"
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Image width={620} height={230} className=" " src='/commentImg/mymind-review-002.png' alt="comment2 img"></Image>
          </motion.div>
          <motion.div
            className="absolute top-[7%] left-[52%] w-[620px] h-[230px]"
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Image width={620} height={230} className="" src='/commentImg/mymind-review-003.png' alt="comment3 img"></Image>
          </motion.div>
          <motion.div
            className="absolute top-[42%] left-[42%] w-[620px] h-[230px]"
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Image width={620} height={230} className="" src='/commentImg/mymind-review-004.png' alt="comment4 img"></Image>
          </motion.div>
          <motion.div
            className=" absolute top-[52%] left-[17%] w-[620px] h-[230px]"
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Image width={620} height={230} className="" src='/commentImg/mymind-review-005.png' alt="comment5 img"></Image>
          </motion.div>
          <Link href='#' className="pt-[30rem] text-nowrap w-fit group flex items-center text-zinc-950 justify-between px-4 py-1 cursor-pointer">
            <ArrowRight className="h-6 text-[#008DDA]"></ArrowRight>
            <span className="group-hover:text-[#008DDA] duration-300 transition-all">
              NOT CONVINCED? WE HAVE MORE
            </span>
          </Link>
        </div>
        <Image width={1440} height={2070} src="/homeImg/mymind_review_neue-1.jpg" alt="mymind_review_neue-1" className="comment-bg min-h-[100%] max-w-[100%] absolute top-[35%] z-[1] left-1/2  -translate-x-1/2 -translate-y-1/2" />
      </section>
      <section className="bg-[#fff1f1] px-[4rem] py-2 pb-[10rem] relative w-full h-full flex flex-col gap-8 items-center justify-center">
        <span className="section-title-2 text-[#008DDA]">USE CASES</span>
        <h2 className="section-title-1 tracking-tighter">
          For visual minds of all kinds.
        </h2>
        <div className=" flex flex-col w-full items-center justify-center gap-8">
          <ul className="flex  w-full items-center justify-center gap-8">
            {useCaseTextList.map((text, index) => (
              <li onClick={() => setUseCaseIndex(index)} className={`relative cursor-pointer duration-300 transition-all text-[#21252a66] text-[1.2rem] ${index === useCaseIndex && `!text-[1.4rem] !text-[#008DDA]`}`} key={index}>
                {text.Navtitle}
                <div className={`${index === useCaseIndex && "opacity-100 top-[110%]"} duration-300 transition-all ease-out w-[6px] h-[6px] bg-[#008DDA] rounded-full absolute top-[50%] opacity-0 left-[50%]`}></div>
              </li>
            ))}
          </ul>
          {useCaseImgList.map((img, index) => (
            <div className={`w-full ${(index === 0 || index === 4) && '!text-white'} h-[750px] flex flex-col p-12 items-center justify-start bg-cover bg-center rounded-lg bg-repeat ${index === useCaseIndex ? 'block' : 'hidden'}`} style={{ backgroundImage: `${img}` }} key={index}>
              <span className="section-title-2 ">{useCaseTextList[index].imgTitle}</span>
              <h2 className="section-title-1 !text-[3.5rem] px-[6rem] tracking-tighter">
                {useCaseTextList[index].imgDesc}
              </h2>
            </div>
          ))}
        </div>
      </section>
      <section style={{ backgroundImage: 'url(/homeImg/Closing_statement_bg_new.png)' }} className="bg-[#fff1f1] px-[4rem] py-2 pb-10 relative bg-top bg-cover bg-no-repeat w-full h-full flex flex-col gap-8 items-center justify-center">
        <svg width="46" height="72" className=" absolute top-[-2rem] left-[49%]" viewBox="0 0 46 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.3618 53.9783V53.7939L3.875 42.9754L4.05939 48.2167L24.3494 59.74L44.8362 49.1059V43.7417L24.3618 53.9783ZM22.0754 50.2697V45.762L7.73471 39.6151L7.79618 42.7132L22.0754 50.2697ZM33.4743 31.1489L32.2082 42.7951L36.3055 44.9711L40.0751 42.9222L36.7071 41.0822L38.7148 30.4276L33.4743 31.1489ZM24.7961 41.9674V39.2996L16.1916 40.0659L11.5616 36.3778L8.03791 37.7547L22.059 43.5778L24.7961 41.9674ZM26.6194 37.1851L26.0621 46.6103L29.1188 48.2494L34.9288 45.6391L30.7003 43.4057L32.2409 31.6037L16.5235 34.0871L24.9558 30.8989L16.0277 20.6951L11.1109 33.4437L17.3799 38.562L26.6194 37.1851ZM35.9736 28.6901L28.7459 26.5428L24.456 19.101L31.3723 26.2724L37.8912 28.2803L36.9775 16.9537L34.3511 24.0021L30.811 20.1419H30.9954C31.5919 20.1409 32.1847 20.0483 32.7531 19.8673C34.6707 19.224 36.1498 17.5971 36.8505 15.2367C37.5531 12.7753 37.4988 10.1594 36.6948 7.72933C35.3672 3.56176 32.2778 0.496545 29.004 0.0662646C28.7686 0.0417974 28.5318 0.0322136 28.2952 0.0375762C27.6973 0.0385319 27.1032 0.13112 26.5333 0.312129C24.6199 0.9555 23.1694 2.61105 22.436 4.94276C21.729 7.40332 21.7818 10.0201 22.5876 12.4501C23.7881 16.2202 26.4309 19.101 29.3441 19.9165C27.6314 19.6584 24.4765 18.4618 21.3748 13.3599L16.6505 16.0891L25.4721 29.9195L35.9736 28.6901ZM35.4287 12.7821L33.5439 13.5197L30.2087 4.96735L35.4287 12.7821ZM28.4632 9.74962C28.2567 9.74881 28.0551 9.68683 27.8838 9.57151C27.7126 9.4562 27.5793 9.29271 27.5008 9.10169C27.4224 8.91068 27.4023 8.70072 27.443 8.49829C27.4838 8.29586 27.5837 8.11005 27.7299 7.96431C27.8762 7.81858 28.0624 7.71945 28.265 7.67946C28.4675 7.63947 28.6774 7.6604 28.8681 7.73961C29.0587 7.81882 29.2217 7.95276 29.3363 8.12451C29.4509 8.29627 29.5121 8.49813 29.5121 8.70463C29.511 8.98215 29.4 9.24795 29.2034 9.4438C29.0069 9.63966 28.7407 9.74962 28.4632 9.74962Z" fill="black" />
          <path d="M16.7628 67.0989V64.0951C16.7982 63.4278 16.6433 62.7641 16.3162 62.1814C16.0758 61.7683 15.7306 61.426 15.3154 61.1893C14.9003 60.9525 14.4299 60.8297 13.952 60.8332C12.7228 60.8332 11.7313 61.6118 10.9733 62.9846C10.9275 62.6934 10.823 62.4145 10.666 62.165C10.4256 61.7519 10.0803 61.4096 9.66517 61.1729C9.25001 60.9361 8.77969 60.8133 8.3018 60.8168C7.0726 60.8168 6.12611 61.5954 5.43366 62.8658C5.45106 62.2318 5.50715 61.5996 5.60164 60.9725C4.73468 61.5588 3.80751 62.0506 2.83594 62.4396C3.54478 62.9354 3.68409 63.3165 3.75784 64.2836C3.8275 65.0171 3.82749 65.7753 3.82749 66.5047V67.0989C3.82749 67.8283 3.8275 68.6561 3.75784 69.3896C3.68409 70.3608 3.56936 70.9755 2.99983 71.6353H3.23748C3.87667 71.6353 4.15938 71.541 4.65516 71.541C5.15094 71.541 5.40907 71.6353 6.04826 71.6353H6.31049C5.74096 70.9755 5.60164 70.3608 5.52789 69.3896C5.48282 68.6561 5.48282 67.8283 5.48282 67.0989V64.7508C5.48282 63.3575 6.33096 62.3412 7.72816 62.3412C8.78937 62.3412 9.47774 63.1608 9.47774 64.3902V67.1112C9.47774 67.8406 9.47774 68.6684 9.40399 69.4019C9.33433 70.3731 9.2155 70.9878 8.65006 71.6476H8.88772C9.52281 71.6476 9.80553 71.5533 10.3054 71.5533C10.8053 71.5533 11.0593 71.6476 11.6985 71.6476H11.9566C11.3912 70.9878 11.2478 70.3731 11.1781 69.4019C11.1331 68.6684 11.1331 67.8406 11.1331 67.1112V64.7508C11.1331 63.3575 11.9812 62.3412 13.3784 62.3412C14.4396 62.3412 15.1239 63.1608 15.1239 64.3902V67.1112C15.1239 67.8406 15.1239 68.6684 15.0542 69.4019C14.9846 70.3731 14.8658 70.9878 14.3003 71.6476H14.5339C15.1731 71.6476 15.4558 71.5533 15.9515 71.5533C16.4473 71.5533 16.7096 71.6476 17.3488 71.6476H17.6069C17.0415 70.9878 16.898 70.3731 16.8284 69.4019C16.7792 68.6684 16.7792 67.8406 16.7792 67.1112L16.7628 67.0989ZM33.5783 67.1112V64.3902C33.6039 63.6549 33.4207 62.9274 33.0498 62.292C32.7684 61.8326 32.3712 61.4553 31.898 61.1978C31.4248 60.9403 30.8923 60.8117 30.3537 60.825C28.9361 60.825 27.8462 61.7224 27.1619 63.0461C27.1676 62.3499 27.2155 61.6547 27.3053 60.9643C26.4384 61.5506 25.5112 62.0424 24.5396 62.4314C25.2484 62.9272 25.3918 63.3083 25.4615 64.2754C25.5312 65.009 25.5311 65.7671 25.5311 66.4965V67.0907C25.5311 67.8201 25.5312 68.6479 25.4615 69.3814C25.3918 70.3526 25.273 70.9673 24.7035 71.6271H24.9411C25.5803 71.6271 25.863 71.5328 26.3588 71.5328C26.8546 71.5328 27.1168 71.6271 27.7519 71.6271H28.0141C27.4446 70.9673 27.3053 70.3526 27.2316 69.3814C27.1865 68.6479 27.1865 67.8201 27.1865 67.0907V64.9844C27.1686 64.6331 27.2249 64.282 27.3519 63.9541C27.479 63.6261 27.6737 63.3286 27.9235 63.0811C28.1734 62.8335 28.4726 62.6415 28.8017 62.5176C29.1308 62.3936 29.4823 62.3405 29.8334 62.3617C31.0872 62.3617 31.882 63.2592 31.882 64.5828V67.0907C31.882 67.8201 31.882 68.6479 31.8124 69.3814C31.7386 70.3526 31.6239 70.9673 31.0544 71.6271H31.292C31.9312 71.6271 32.2139 71.5328 32.7097 71.5328C33.2055 71.5328 33.4677 71.6271 34.1028 71.6271H34.365C33.7955 70.9673 33.6562 70.3526 33.5824 69.3814C33.5374 68.6479 33.5374 67.8201 33.5374 67.0907L33.5783 67.1112ZM21.9296 67.0907V65.2466C21.9296 63.4477 22.0033 62.5748 22.0484 60.9643C21.1819 61.5514 20.2547 62.0433 19.2827 62.4314C19.9915 62.9272 20.1349 63.3083 20.2046 64.2754C20.2783 65.009 20.2783 65.7671 20.2783 66.4965V67.0907C20.2783 67.8201 20.2783 68.6479 20.2046 69.3814C20.1349 70.3526 20.0161 70.9673 19.4507 71.6271H19.6842C20.3234 71.6271 20.6061 71.5328 21.106 71.5328C21.6059 71.5328 21.8599 71.6271 22.4991 71.6271H22.7573C22.1918 70.9673 22.0484 70.3526 21.9788 69.3814C21.9296 68.6479 21.9296 67.8201 21.9296 67.0907ZM45.0468 68.6725C44.9772 67.939 44.9772 67.2792 44.9772 66.5457V58.3048C44.9772 56.5058 45.0468 55.6329 45.096 54.0225C44.2281 54.6072 43.3011 55.0989 42.3303 55.4895C43.0391 55.9854 43.1784 56.3624 43.2522 57.3336C43.3218 58.0671 43.3218 58.8211 43.3218 59.5546V61.6036C42.5311 61.0589 41.5851 60.7857 40.6258 60.825C38.0977 60.825 35.709 63.0952 35.709 66.5621C35.709 70.0289 37.9093 72 40.2939 72C41.5026 72 42.7523 71.0042 43.3915 69.824L43.4612 71.8729C44.2635 71.3637 45.1015 70.9132 45.9687 70.5247C45.3541 70.115 45.1165 69.6519 45.0468 68.6807V68.6725ZM43.3218 67.689C43.3218 69.3896 42.3508 70.4797 40.7692 70.4797C38.9008 70.4797 37.4339 68.8692 37.4339 65.972C37.4339 63.2059 38.95 61.9027 40.4373 61.9027C41.8345 61.9027 43.3055 62.7797 43.3055 65.2384L43.3218 67.689Z" fill="black" />
          <path d="M10.8662 14.0519C10.9629 14.5929 11.0109 15.1415 11.0096 15.6911C11.0096 18.2195 10.6285 20.5594 9.1166 24.1533C9.15763 23.8393 9.18088 23.5233 9.18625 23.2067C9.13073 20.6405 8.65174 18.1011 7.76858 15.6911C7.29739 14.3429 6.80161 13.847 6.16243 13.847C5.28969 13.847 4.08096 15.2403 4.01131 18.4777C5.00287 16.0886 5.4044 15.5231 5.81004 15.5231C5.94935 15.5231 6.11735 15.6665 6.30582 16.1869C7.13179 18.4299 7.58574 20.7927 7.64974 23.1821C7.64974 26.944 5.33475 29.8248 2.7821 29.8248C2.05721 29.8026 1.35082 29.5907 0.733429 29.2101C0.41518 29.6675 0.167907 30.1704 0 30.7017C0.464688 31.0019 1.00799 31.1573 1.56109 31.1484C2.88453 31.1484 4.37188 30.6771 6.00262 29.3535C7.7537 27.8564 9.15277 25.9912 10.1 23.891C11.6365 20.6127 12.3453 17.7933 12.3453 15.0764C12.3439 14.6477 12.3055 14.2199 12.2306 13.7979L10.8662 14.0519Z" fill="black" />
          <path d="M15.6002 7.79013C14.1129 9.23259 13.4 9.65467 12.9984 9.65467C12.9288 9.65071 12.8627 9.62288 12.8112 9.57586C12.7597 9.52883 12.726 9.46548 12.7157 9.3965C12.7116 9.21044 12.7436 9.02536 12.81 8.8515L14.5144 4.43394C15.129 2.82346 15.129 2.49563 15.129 1.97519C15.129 0.794997 14.4899 0.0164076 13.5925 0.0164076C12.5969 0.0164076 11.6996 0.725323 10.4253 2.7333C10.4458 2.49562 10.4704 2.23746 10.4704 2.04895C10.4704 0.889246 9.85576 0 8.88879 0C7.92181 0 6.90158 0.897443 5.72154 3.04884C5.85967 2.57205 5.93002 2.07819 5.93051 1.58179C5.93051 0.729422 5.52077 0 4.72588 0C3.93099 0 2.59937 0.848276 2.31665 3.56929C3.05007 2.19649 3.68516 1.46296 4.16046 1.46296C4.34893 1.46296 4.53741 1.60639 4.53741 2.00798C4.4791 2.66819 4.34153 3.31897 4.12767 3.94629L3.48848 6.23703C3.07875 7.72867 2.52151 9.17113 1.97656 10.589L3.58273 10.966L4.97993 6.16735C5.87724 3.09392 7.38917 1.53261 8.33565 1.53261C8.74539 1.53261 8.97484 1.91372 8.97484 2.3522C8.97484 3.04064 8.83143 3.65535 8.38072 4.92979L6.39759 10.6054L7.90951 10.9578L9.30262 6.58534C10.4622 2.9464 11.9741 1.50393 12.9206 1.50393C13.2975 1.50393 13.5352 1.78669 13.5352 2.28254C13.5352 2.77838 13.3713 3.27422 12.9902 4.27001L11.8553 7.31886C11.171 9.16292 11.1259 9.47027 11.1259 9.9907C11.1236 10.1265 11.149 10.2614 11.2005 10.3871C11.2521 10.5128 11.3287 10.6267 11.4257 10.7218C11.5227 10.8169 11.6381 10.8913 11.7648 10.9403C11.8915 10.9893 12.0268 11.012 12.1626 11.007C13.2525 11.007 14.6947 9.96611 15.592 7.72865" fill="black" />
        </svg>
        <span className=" text-[3rem] leading-[4rem] tracking-tighter text-center w-full px-[10rem]">
          <br></br><br></br>
          We’re trying something different with mymind. It’s a refreshing approach to
          remembering the things you care about.
          One place for everything.
          <div className="my-8"></div>
          We put privacy first.
          <div className="my-8"></div>
          We love beautiful, simple design
          that considers and respects how you
          naturally think and work.
          <div className="my-8"></div>
          We’d rather you spend less time
          managing your life, and more time
          doing what makes you happy.
        </span>
        <Link href='#' className=" mt-8 bg-[#008DDA] text-white text-base duration-300 transition-all hover:shadow-[0px_2px_8px_#008DDA] px-6 py-2 cursor-pointer rounded-full uppercase">Sign up for free</Link>
        <div className=" flex justify-between mt-32 w-full ">
          <div className=" w-full cursor-pointer hover:scale-95 duration-300 transition-all  flex flex-col gap-4 items-start">
            <Image width={413} height={550} className="rounded-lg" src='/homeImg/On-cozy-homes-surreal-movies-stifling-impulses.webp' alt="img"></Image>
            <p>THOUGHTS</p>
            <span className=" tracking-tighter mt-[-1rem] text-[1.2rem] text-wrap">On cozy homes, surreal movies & stifling impulses</span>
          </div>
          <div className=" w-full cursor-pointer hover:scale-95 duration-300 transition-all  flex flex-col gap-4 items-start">
            <Image width={413} height={550} className="rounded-lg" src='/homeImg/Thats-a-good-quote-1.webp' alt="img"></Image>
            <p>TIPS & TRICKS</p>
            <span className=" tracking-tighter mt-[-1rem] text-[1.2rem] text-wrap">That’s a good quote</span>
          </div>
          <div className=" w-full cursor-pointer hover:scale-95 duration-300 transition-all  flex flex-col gap-4 items-start">
            <Image width={413} height={550} className="rounded-lg" src='/homeImg/On-spaciousness-the-purpose-of-art-Italian-villas.webp' alt="img"></Image>
            <p>THOUGHTS</p>
            <span className=" tracking-tighter mt-[-1rem] text-[1.2rem] text-wrap">On spaciousness, the purpose of art & Italian villas</span>
          </div>
        </div>
      </section>
    </main >
  );
}
