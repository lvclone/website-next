import type { NextPage } from 'next';
import { MainHead, Footer, Navbar, SponsorCard } from '@components/core';
import { Main, Panel, Wrapper } from '@components/layout';
import { LanguageCard, FilterSidebar, ToolsList } from '@components/tools';

import languages from '../../mockdata/languages.json';

const ToolsPage: NextPage = () => {
    const title = 'Analysis Tools';
    const description =
        'Find static code analysis tools and linters that can help you improve code quality. All tools are peer-reviewed by fellow developers to meet high standards.';

    return (
        <>
            <MainHead title={title} description={description} />

            <Navbar />
            <Wrapper className="m-t-20 m-b-30 ">
                <Main>
                    <FilterSidebar />
                    <Panel>
                        <LanguageCard language={languages[0]} />
                        <ToolsList language={languages[0].name} tools={[]} />
                    </Panel>
                </Main>
            </Wrapper>

            <SponsorCard />
            <Footer />
        </>
    );
};

export default ToolsPage;