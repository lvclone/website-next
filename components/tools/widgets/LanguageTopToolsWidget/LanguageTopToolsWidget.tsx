import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@components/layout';
import { Heading } from '@components/typography';
import { ToolsListWidget } from '@components/tools';
import { type Language, type Tool } from '@components/tools/types';
import styles from './LanguageTopToolsWidget.module.css';

export interface LanguageTopToolsWidgetProps {
    language: Language;
    formatters: Tool[];
    linters: Tool[];
}
const LanguageTopToolsWidget: FC<LanguageTopToolsWidgetProps> = ({
    language,
    formatters,
    linters,
}) => {
    return (
        <Card className={styles.languageCardWrapper}>
            <Link href={language.href}>
                <a className={styles.languageLink}>
                    <Image
                        height="50px"
                        width="50px"
                        src={language.logo}
                        alt={language.name}
                    />
                    <Heading level={2} className={styles.languageName}>
                        {language.name} static analysis tools
                    </Heading>
                </a>
            </Link>

            <div className={styles.toolListWrapper}>
                <ToolsListWidget
                    title={`Most popular ${language.name} Formatters`}
                    href="/tools"
                    tools={formatters}
                />

                <ToolsListWidget
                    title={`Most popular ${language.name} Linters`}
                    href="/tools"
                    tools={linters}
                />
            </div>
        </Card>
    );
};

export default LanguageTopToolsWidget;