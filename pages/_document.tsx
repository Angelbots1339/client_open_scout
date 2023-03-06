import Document, {Html, Main, NextScript, DocumentContext, Head} from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const page = await ctx.renderPage();
        const initialProps = await Document.getInitialProps(ctx);
        // const styles = extractCritical(page.html);
        return {...initialProps, ...page};
    }

    render() {
        return (
            <Html lang="en">
                <Head>

                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}