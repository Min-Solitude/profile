import PageWrapper from "@/components/animations/PageWrapper"
import Footer from "@/components/layouts/Footer"
import Header from "@/components/layouts/Header"

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header className='w-full sticky top-0 left-0' />
            <main className="flex item-center flex-col min-h-screen mb-8">
                <PageWrapper>
                    {children}
                </PageWrapper>
            </main>
            {/* <Footer /> */}
        </>
    )
}
