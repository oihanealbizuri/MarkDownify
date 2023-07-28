"use client" // to ensure this code runs on the client-side
import {useEffect, useState} from 'react';
import {marked} from 'marked';
import './page.css'

export default function Home() {
    const [markdownText, setMarkdownText] = useState('');
    const [htmlOutput, setHtmlOutput] = useState('');

    useEffect(() => {
        const markedHtml = marked(markdownText);
        setHtmlOutput(markedHtml);
    }, [markdownText]);

    const handleMarkdownChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const mdText = event.target.value;
        setMarkdownText(mdText);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Markdown to Formatted Text Converter</h1>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h2 className="text-lg font-semibold mb-2">Input (Markdown)</h2>
                    <textarea
                        className="w-full h-96 resize-none p-2 border rounded-md text-black"
                        value={markdownText}
                        onChange={handleMarkdownChange}
                    />
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-2">Output (Formatted Text)</h2>
                    <div

                        className="w-full h-96 resize-none p-2 border rounded-md overflow-y-auto"
                        style={{fontSize: '16px'}}
                        dangerouslySetInnerHTML={{__html: htmlOutput}}
                    />
                </div>
            </div>
        </div>
    );
}
