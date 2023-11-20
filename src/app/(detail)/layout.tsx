import PageWrapper from "@/components/animations/PageWrapper"
import Footer from "@/components/layouts/Footer"
import Header from "@/components/layouts/Header"

export default function DetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <PageWrapper>
            {children}
        </PageWrapper>
    )
}
