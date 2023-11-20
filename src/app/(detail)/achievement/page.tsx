import { IMAGES } from '@/assets'
import Back from '@/components/customs/Back'
import BoxDrag from '@/components/customs/BoxDrag'
import Content from '@/components/customs/Content'
import Section from '@/components/motion/Section'
import Image from 'next/image'
import React from 'react'

export default function AchievementPage() {
    return (
        <Section className="flex  flex-col items-center pb-16">
            <div className="w-full min-h-screen duration-150 md:w-[70%] lg:w-[60%] p-3 lg:p-0 xl:w-[50%] 2xl:w-[40%] flex justify-start flex-col items-center">
                <Back className='my-[8vh]' />
                <div className='w-full flex flex-col gap-8 items-start'>
                    <Content
                        text='The achievements I have achieved.'
                        vn_text={'Những thành tựu mà tôi đã đạt được.'}
                        className='font-bold text-3xl' />

                    <div className='py-2 text-sm font-semibold text-[#383838] shadow-primary px-5 rounded-full bg-[#dddddd]'>
                        Oct 18, 2023
                    </div>
                    <div className='flex flex-col gap-8'>
                        <Content
                            text={`I started my programming career at the end of 2021. At this time, I really don't have anything outstanding, I can only work with HTML and CSS. It can be said that at this time my skills are very weak, but at the beginning of 2022 I saw a special appearance in my life. That makes me try to change. I've been focusing more on it. Create many products and this is my first product.`}
                            vn_text={`Tôi bắt đầu đặt chân vào con đường lập trình vào cuối năm 2021. Tại thời điểm này bản thân tôi thật sự chưa có gì nổi trội, chỉ có thể làm việc với HTML CSS. Có thể nói thời điểm này kỹ năng của tôi rất là yếu, nhưng vào thời điểm đầu 2022 tôi thấy có một sự xuất hiện đặc biệt trong cuộc sống của tôi. Điều đó làm tôi phải cố gắng để thay đổi. Tôi đã tập trung chuyên sâu vào nó hơn. Tạo ra nhiều sản phẩm và đây là sản phẩm đầu tay của tôi.`}
                            className='text-base' />
                        <BoxDrag className='h-[30vh] md:h-[40vh] overflow-hidden rounded-2xl bg-white'>
                            <Image src={IMAGES.minimosa} alt='' className='w-full shadow-primary h-full object-cover' />
                        </BoxDrag>
                        <Content
                            text=' It was simply HTML CSS but it made a mark for me. By mid-2022, this is when I changed the most. I have had opportunities to participate in major competitions and the first competition I fought in was the FPT HACKATHON 2022 competition organized by the FPT training system.'
                            vn_text={'  Nó chỉ đơn giản là HTML CSS nhưng nó đã làm một dấu mốc với tôi. Đến giữa năm 2022, đây là thời điểm tôi thay đổi nhiều nhất. Tôi có được những cơ hội tham gia những cuộc thi lớn và cuộc thi đầu tiên mà tôi chinh chiến là cuộc thi FPT HACKATHON 2022 do hệ đào tạo FPT tổ chức.'}
                            className='text-base' />
                        <BoxDrag className='h-[30vh] md:h-[40vh] overflow-hidden rounded-2xl bg-white'>
                            <Image src={IMAGES.hackathon2022} alt='' className='w-full shadow-primary h-full object-cover' />
                        </BoxDrag>
                        <Content
                            vn_text={`Đây là một cuôc thi về Blockchain, tôi và nhóm của mình đã xây dựng một web app passbook. Và nó đã đem lại cho nhóm giải nhì trong cuộc thi này và đây là thành tựu đầu tiên trong quá trình tìm hiểu về ngành.`}
                            text={` This is a Blockchain contest, my team and I built a passbook web app. And it brought the group the second prize in this competition and this was the first achievement in the process of learning about the industry.`}
                            className='text-base' />

                        <Content
                            vn_text={` Qua nhiều tháng sau tôi cùng nhóm của mình tham gia nhiều cuộc thi về blockchain. Và cả nhóm cũng đã có một tiếng tăm trong các cuộc thi. Điều này có thể nói là một điều may mắn và tuyệt vời.`}
                            text={`Over the next several months, my team and I participated in many blockchain competitions. And the group also has a reputation in competitions. This can be said to be a lucky and wonderful thing.`}
                            className='text-base' />

                        <BoxDrag className='h-[30vh] md:h-[40vh] shadow-primary overflow-hidden rounded-2xl bg-white'>
                            <Image src={IMAGES.solana} alt='' className='w-full h-full object-cover' />
                        </BoxDrag>
                        <Content
                            text={`In addition to those competitions, I also actively participate in large and small activities at school. I am active in a club called Coder Poly and am the club's president. My friends and I open tutor classes to share knowledge with students and sometimes also organize small competitions to create more atmosphere in the learning environment.`}
                            vn_text={` Ngoài những cuộc thi đó, tôi cũng tích cực tham gia các hoạt động lớn nhỏ tại trường. Tôi hoạt động trong một câu lạc bộ mang tiên Coder Poly và làm ban chủ nhiệm của câu lạc bộ. Tôi cùng các bạn bè của mình mở các lớp học tutor để chia sẻ kiến thức cho các bạn sinh viên và đôi khi cũng tổ chức các cuộc thi nhỏ nhằm tạo thêm không khí trong môi trường học.`}
                            className='text-base' />
                        <Content
                            text={` And in addition to participating in programming activities, I also participate in other outside activities. Like becoming a content creator in the field of painting, participating in exhibitions and painting competitions,... Painting is my biggest passion. It's what makes me want to bring that beauty into programming.`}
                            vn_text={`Và ngoài việc tham gia các hoạt động trong lĩnh vực lập trình tôi còn tham gia các hoạt động ngoài khác. Như trở thành một người sáng tạo nội dung về lĩnh vực vẽ tranh, tham gia các buổi triễn lãm và các cuộc thi hội họa,... Hội họa chính là đam mê lớn nhất của tôi. Nó là thứ khiến tôi muốn đem sự tuyệt đẹp đó vào ngành lập trình.`}
                            className='text-base' />

                        <Content
                            text={`And that's what I want to share about what I see as an achievement for me. Thank you for watching :))`}
                            vn_text={`Và đó là những gì tôi muốn chia sẻ về những thứ tôi thấy nó là thành tựu với tôi. Cảm ơn bạn đã xem :))`}
                            className='text-base' />

                    </div>
                </div>
            </div>
        </Section>
    )
}
