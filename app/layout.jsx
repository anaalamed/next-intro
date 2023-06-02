import '@styles/global.css';

export const metadata = {
    title: "Promptia",
    description: "Discover & Share AI Prompts "
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient"></div>
                </div>
            </body>

            <main className="app">{children}</main>
        </html>
    )
}

export default RootLayout
