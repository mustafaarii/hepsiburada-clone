import React, { FC, useEffect, useState } from 'react'
import { CarouselContent } from './models/CarouselContent';
import styles from './index.module.css';
import { CarouselItem } from './models/CarouselItem';
import { MdIosShare } from 'react-icons/md';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export interface ITopCarousel {
  content: CarouselContent[],
  startIndex: number
}

const TopCarousel: FC<ITopCarousel> = ({ content, startIndex }) => {

  const [selectedContent, setSelectedContent] = useState<CarouselContent | null>(null); //seçili content dizisi
  const [contentIndex, setContentIndex] = useState<number>(startIndex); // seçili contentin indexi. buna göre next-prev yapılıyor
  const [selectedItem, setSelectedItem] = useState<CarouselItem | null>(null); // seçili item
  const [showShare, setShowShare] = useState<boolean>(false); // paylaşma penceresinin görünümü

  useEffect(() => {
    content && setSelectedContent(content[startIndex])
  }, [])

  useEffect(() => {
    selectedContent?.items && setSelectedItem(selectedContent.items[0]) 
  }, [selectedContent])

  const handleNextItem = () => {
    const index:number|undefined = selectedContent?.items.findIndex(item=>item === selectedItem);
    if(index!=undefined && selectedContent?.items[index+1]){
      selectedContent?.items && setSelectedItem(selectedContent?.items[index+1])
    }
    else if(content[contentIndex+1]){
      setSelectedContent(content[contentIndex+1])
      setContentIndex(contentIndex+1);
    }
    else{
      setSelectedContent(content[0])
      setContentIndex(0);
    }
      
  }

  const handlePrevItem = () => {
    const index:number|undefined = selectedContent?.items.findIndex(item=>item === selectedItem);
    if(index!=undefined && selectedContent?.items[index-1]){
      selectedContent?.items && setSelectedItem(selectedContent?.items[index-1])
    }
    else if(content[contentIndex-1]){
      setSelectedContent(content[contentIndex-1])
      setContentIndex(contentIndex-1);
    }
    else{
      setSelectedContent(content[content.length-1])
      setContentIndex(content.length-1);
    }
  }

  const handleClickTitleButtons = (item:CarouselContent) => {
    const index = content.findIndex((elem,index)=>item===elem)
    
      setShowShare(false);
      setSelectedContent(item);
      setContentIndex(index ? index : 0);
  }

  const renderTitleButtons = () => {
    return (
      <div>
        {
          content.map((item, index) => (
            <button
              className={item.id === selectedContent?.id ? styles.contentTitleButtonActive : styles.contentTitleButton}
              onClick={()=>handleClickTitleButtons(item)}
            >
              {item.title}
            </button>
          ))
        }
      </div>
    )
  }

  const renderItemCard = () => {
    return (
      <div className="mx-auto w-7/12 bg-white rounded-md flex p-1.5">
        <div className="bg-transparent w-5/12 flex flex-col p-4 justify-around ">

          <div className="block text-3xl hover:cursor-pointer self-end relative">
            <MdIosShare onClick={() => setShowShare(!showShare)} />

            <div className={`${!showShare && 'hidden'} absolute top-10 text-sm w-56 bg-white rounded-md shadow-lg`}>
              <ul className="py-2">
                <li className="flex w-full p-3 gap-2 hover:bg-slate-200 border-b-[1px]">
                  <img src="/images/icons/whatsapp.svg" />
                  <a href={selectedItem?.socialLinks?.whatsapp}>WhatsApp'dan Paylaş</a>
                </li>
                <li className="flex p-3 gap-2 hover:bg-slate-200 border-b-[1px]">
                  <img src="/images/icons/facebook.svg" />
                  <a href={selectedItem?.socialLinks?.facebook}>Facebook'ta Paylaş</a>
                </li>
                <li className="flex p-3 gap-2 hover:bg-slate-200 border-b-[1px]">
                  <img src="/images/icons/twitter.svg" />
                  <a href={selectedItem?.socialLinks?.twitter}>Twitter'da Paylaş</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-4xl text-gray-700 font-medium text-center">{selectedItem?.headText} </p>
          <p className="text-xl tracking-wider text-center">{selectedItem?.description} </p>
          <button
            className={`${selectedItem?.buttonColor ? selectedItem.buttonColor : "bg-hb-orange"} 
                    text-white text-sm w-40 p-3 rounded-full`}
          >
            {selectedItem?.buttonText}
          </button>

          <p className="text-xs font-normal">{selectedItem?.noteText}</p>

        </div>
        <a className="hover:cursor-pointer w-8/12" href={selectedItem?.imageLink}>
          <img className="rounded-md w-full h-full" src={selectedItem?.imageURL}>
          </img>
        </a>
      </div>
    )
  }

  const renderItemIcons = () => {
    return (
      <div className="flex gap-4">
        <button 
          className="border-white text-white rounded-full border-2 px-6 py-3 transition-opacity opacity-80 hover:opacity-100"
          onClick={handlePrevItem}
        >
          <AiOutlineArrowLeft />
        </button>

        {
          selectedContent?.items.map((item,index:number) => (
            <button
              style={{
                backgroundImage: `url(${item.iconURL})`,
                backgroundSize: "cover"
              }}
              className={`${item.iconURL === selectedItem?.iconURL && "border-2 border-white opacity-100"}text-gray-800 rounded-xl px-6 py-3`}
              onClick={()=>setSelectedItem(item)}
            >
            </button>
          ))
        }
        <button 
          className="border-white text-white rounded-full border-2 px-6 py-3 transition-opacity opacity-80 hover:opacity-100"
          onClick={handleNextItem}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    )
  }

  return (
    <div
      className={styles.contentWrapper}
      style={{
        backgroundImage: `url(${selectedItem?.imageURL})`,
        backgroundSize: "cover"
      }}
    >
      <div className={styles.contentContainer}>
        {renderTitleButtons()}
        {renderItemCard()}
        {renderItemIcons()}
      </div>
    </div>
  )

}

export default TopCarousel;