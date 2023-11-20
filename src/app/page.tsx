
import { IMAGES } from "@/assets";
import Avatar from "@/components/customs/Avatar";
import BoxDrag from "@/components/customs/BoxDrag";
import Button from "@/components/customs/Button";
import Content from "@/components/customs/Content";
import Map from "@/components/customs/Map";
import Section from "@/components/motion/Section";
import IonIcon from "@reacticons/ionicons";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "./(default)/layout";
import Info from "@/components/customs/Info";

export default function Home() {

  return (
    <DefaultLayout>
      <Section className="flex md:mt-8 flex-col items-center" >
        <div className="w-full min-h-screen duration-150 md:w-[90%] lg:w-[80%] p-3 lg:p-0 xl:w-[70%] 2xl:w-[60%] flex justify-center items-center">
          <div className="min-h-[80vh] w-full flex flex-col gap-3 justify-start duration-150">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 md:flex-row">
                <BoxDrag className="bg-white min-h-[18rem] w-full rounded-3xl gap-[2rem] shadow-primary p-[2rem] flex flex-col items-start">
                  <Avatar image={IMAGES.avatar} />
                  <Info />
                </BoxDrag>
                <BoxDrag className="instagram min-h-[18rem] w-full relative rounded-3xl overflow-hidden gap-[2rem] shadow-secondary flex justify-center items-center md:max-w-[18rem]">
                  <IonIcon name="logo-instagram" className="text-[#ffffff] text-6xl" />
                  <Link href="https://www.instagram.com/ktys4tt/" className="absolute bottom-4 left-4 flex justify-center items-center">
                    <Button kind="secondary">
                      <IonIcon name="arrow-up" className="text-xl rotate-45" />
                    </Button>
                  </Link>
                </BoxDrag>
              </div>
              <BoxDrag className="bg-white h-[18rem] md:h-[24rem] w-full relative rounded-3xl overflow-hidden gap-[2rem] shadow-secondary flex justify-center items-center ">
                <Map address="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1795312358327!2d106.63571807581548!3d10.797557858802039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529d945ab793d%3A0x70a76eaa7d8e7bcf!2zOTU4LzMgxJAuIMOCdSBDxqEsIFBoxrDhu51uZyAxMywgVMOibiBCw6xuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1700273942332!5m2!1svi!2s" />
              </BoxDrag>
            </div>

            <div className="flex flex-col gap-3 md:flex-row">
              <div className=" flex gap-3">
                <BoxDrag className="flex-1 shadow-primary rounded-2xl relative overflow-hidden md:max-h-[18rem]">
                  <Image src={IMAGES.min} alt="" />
                  <Link href={`/achievement`}>
                    <Button kind="secondary" className="absolute group overflow-hidden bottom-4 gap-2 px-4 duration-150 left-4">
                      <IonIcon name="arrow-up" className="text-xl rotate-45" />
                      <Content
                        text="Achievement"
                        vn_text="Thành tựu"
                        className="text-sm duration-150 font-medium" />

                    </Button>
                  </Link>
                </BoxDrag>
                <BoxDrag className="flex-1 shadow-primary  rounded-2xl relative overflow-hidden  md:max-h-[18rem]">
                  <Image src={IMAGES.iphone} alt="" />
                  <Link href={'/nev'}>
                    <Button kind="secondary" className="absolute group overflow-hidden bottom-4  right-4">
                      <IonIcon name="arrow-up" className="text-xl -rotate-45" />
                    </Button>
                  </Link>
                </BoxDrag>
              </div>
              <BoxDrag className=" bg-white w-full relative rounded-3xl overflow-hidden gap-[2rem] shadow-secondary p-8 flex justify-start flex-col items-start md:max-w-[18rem] max-h-[18rem]">
                <Image src={IMAGES.spotify} alt="" className="w-[70px]" />
                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1 items-center">
                      <div className="vocal_music_01"></div>
                      <div className="vocal_music_02"></div>
                      <div className="vocal_music_03"></div>
                    </div>
                    <Content
                      text="My favorite song"
                      vn_text="Ca khúc yêu thích"
                      className="text-base font-medium text-[#62dbbe]" />
                  </div>
                  <div className="flex flex-col gap-1"><Link href={'https://open.spotify.com/track/4nkRb1iWHIjvpVcWtCPzuY'} className="text-3xl font-bold text-[#1a1a1a]">Van Gogh </Link><span className="text-sm text-[#3b3b3b]">(feat. Ashley Alisha)</span></div>
                </div>
              </BoxDrag>
            </div>
            <div className="flex flex-col gap-3 md:flex-row">
              <BoxDrag className=" bg-white w-full relative rounded-3xl overflow-hidden gap-[2rem] shadow-secondary p-8 flex justify-start flex-col items-start">
                <div className="flex flex-col gap-1">
                  <Content
                    vn_text="Bắt đầu như thế nào và đang diễn ra như thế nào."
                    text="How it started vs. how it's going."
                    className="font-bold text-2xl" />
                  <Content
                    vn_text="Một lịch sử cá nhân ngắn gọn liên quan đến thiết kế và phát triển cũng như cách tôi tìm thấy giá trị trong sự giao thoa giữa cả hai lĩnh vực."
                    text="A short personal history as it relates to design and development, and how I've found value in the cross-section between both disciplines."
                    className="text-[#313131]" />

                </div>
                <div className="mt-8 flex w-full items-center justify-between">
                  <Button kind="secondary" className="group overflow-hidden bottom-4 gap-2 px-4 duration-150 left-4">
                    <IonIcon name="arrow-up" className="text-xl rotate-45" />
                    <Content
                      vn_text="Đọc thêm"
                      text="Read more"
                      className="text-sm duration-150 font-medium" />
                  </Button>
                  <span className="font-medium text-sm text-[#5a5a5a] ">May 5,2021</span>
                </div>
              </BoxDrag>
              <BoxDrag className=" bg-white w-full relative rounded-3xl overflow-hidden gap-[2rem] shadow-secondary p-8 flex justify-start flex-col items-start md:justify-between">
                <div className="flex flex-col gap-1">
                  <Content
                    vn_text="Tôi đã tạo ra một số sản phẩm và dự án trong quá khứ."
                    text="I've created some products and projects in the past."
                    className="font-bold text-2xl" />
                  <Content
                    vn_text="Tôi đã tạo ra một số sản phẩm và dự án trong quá khứ."
                    text="I've created some products and projects in the past."
                    className="text-[#313131]" />

                </div>
                <Content
                  vn_text=" Liên hệ với tôi thông qua email*"
                  text=" Contact me via email*"
                  className="text-sm duration-150 font-medium" />
              </BoxDrag>
            </div>
          </div>
        </div >
      </Section >
    </DefaultLayout>
  )
}
