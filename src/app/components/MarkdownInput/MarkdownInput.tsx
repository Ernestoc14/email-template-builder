// components/EnhancedMarkdownEditor.jsx
'use client';

import Box from '@mui/material/Box';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect, useRef } from 'react';
import markdownToHtml from '@/app/utils/markdownUtils';

const MarkdownInput = ({value, onChange}:{value: string, onChange: (html: string) => void}) => {
    const [markdown, setMarkdown] = useState(value);
    const [html, setHtml] = useState('');
    const [preview, setPreview] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {setMarkdown(value)}, [value])
    // Convert Markdown to html
    useEffect(() => {
        setHtml(markdownToHtml(markdown));
        onChange(markdown)
    }, [markdown]);

    
    const insertText = (startChars: string, endChars = '') => {
        if (!textareaRef.current) return;
        
        const textarea = textareaRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = markdown.substring(start, end);
        
        const newText = markdown.substring(0, start) +  startChars +  selectedText +  endChars +  markdown.substring(end);
        
        setMarkdown(newText);
        
        
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange( start + startChars.length, end + startChars.length );
        }, 0);
    };
    
    const formatButtons = [
        { label: 'B', title: 'Negrita', action: () => insertText('**', '**') },
        { label: 'I', title: 'Cursiva', action: () => insertText('*', '*') },
        { label: 'H1', title: 'Título 1', action: () => insertText('# ', '') },
        { label: 'H2', title: 'Título 2', action: () => insertText('## ', '') },
        { label: 'H3', title: 'Título 3', action: () => insertText('### ', '') },
        { label: 'Link', title: 'Enlace', action: () => insertText('[', '](url)') },
        { label: 'List', title: 'Lista', action: () => insertText('- ', '') },
    ];

    return (
        <Box className={`markdown-editor ${fullscreen ? 'fullscreen' : ''}`}>
            <Box className="toolbar">
                <Box className="format-buttons">
                    {formatButtons.map((button, index) => (
                        <button key={index} onClick={button.action} title={button.title} className="format-button" type="button" disabled={preview}
                        >
                        {button.label}
                        </button>
                    ))}
                </Box>
                
                <Box className="view-controls">
                    <button onClick={() => setPreview(!preview)} className={`view-button ${preview ? 'active' : ''}`} title={preview ? "Edit Mode" : "Preview"} >
                        {preview ? (<><EditIcon />Edit</>) : (<><RemoveRedEyeIcon />Preview</>)}
                    </button>
                
                <button  onClick={() => setFullscreen(!fullscreen)} className="view-button" title={fullscreen ? "Exit full screen" : "Full screen"}>
                    {fullscreen ? (<FullscreenExitIcon />) : (<FullscreenIcon />)}
                </button>
                </Box>
            </Box>
        
            <Box className="editor-container">
                {!preview ? (
                    <textarea ref={textareaRef} value={markdown} onChange={(e) => setMarkdown(e.target.value)} className="editor" placeholder="Escribe tu markdown aquí..." spellCheck={false}/>
                ) : (
                    <Box className="preview" dangerouslySetInnerHTML={{ __html: html }}/>
                )}
            </Box>
        </Box>
    );    
}   
    
export default MarkdownInput