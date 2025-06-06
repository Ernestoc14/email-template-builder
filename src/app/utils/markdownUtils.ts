const markdownToHtml = (md: string) => {
        if (!md) return '';
        const html = md;

        const lines = html.split('\n');
        const processedLines = [];
        let inParagraph = false;
        let inList = false;
        let inOrderedList = false;
        //let listItems = [];
        let inTable = false;
        //const tableRows = [];
        let inBlockquote = false;
        let blockquoteContent: string[] = [];
        
        const processInlineElements = (text: string) => {
            if (text.match(/<[^>]*>/)) return text;
            
            let processed = text;
            processed = processed.replace(/\*\*([^*]+)\*\*/g, '<span style="SuisseIntl, Arial, Helvetica, sans-serif;font-size: 14px;font-style: normal;font-weight: 600;line-height: 20px;color: #333333;">$1</span>');
            processed = processed.replace(/\*([^*]+)\*/g, '<em>$1</em>');
            processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a style="color: #0E68FF; font-weight:700;text-decoration:none" target="_blank" href="$2">$1</a>');
            
            return processed;
        };
        
        const closeCurrentBlock = () => {
            if (inParagraph) {
                processedLines.push('</p>');
                inParagraph = false;
            }
            
            if (inList) {
                processedLines.push(inOrderedList ? '</ol>' : '</ul>');
                inList = false;
                inOrderedList = false;
                //listItems = [];
            }
            
            if (inTable) {
                processedLines.push('</tbody></table>');
                inTable = false;
                // tableRows = [];
            }
            
            if (inBlockquote) {
                processedLines.push(`<blockquote>${blockquoteContent.join('')}</blockquote>`);
                inBlockquote = false;
                blockquoteContent = [];
            }
        };
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
        
            if (line.startsWith('<pre>')) {
                closeCurrentBlock();
                processedLines.push(line);
                continue;
            }
        
            if (line.startsWith('> ')) {
                if (!inBlockquote) {
                closeCurrentBlock();
                inBlockquote = true;
                blockquoteContent = [];
                }
                blockquoteContent.push(`<p style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 400; font-size: 14px; line-height: 20px; margin: 0;color: #666666">${processInlineElements(line.substring(2))}</p>`);
                continue;
            } else if (inBlockquote) {
                closeCurrentBlock();
            }
            
            if (line.startsWith('# ')) {
                closeCurrentBlock();
                processedLines.push(`<p style="font-family: Gilroy, Helvetica, Arial, sans-serif; font-weight: 700; font-size: 32px; line-height: 40px; margin: 0;color: #0032A0">${processInlineElements(line.substring(2))}</p>`);
                continue;
            }
            if (line.startsWith('## ')) {
                closeCurrentBlock();
                processedLines.push(`<p style="font-family: Gilroy, Helvetica, Arial, sans-serif; font-weight: 700; font-size: 20px; line-height: 32px; margin: 0;color: #0032A0">${processInlineElements(line.substring(3))}</p>`);
                continue;
            }
            if (line.startsWith('### ')) {
                closeCurrentBlock();
                processedLines.push(`<p style="font-family: Gilroy, Helvetica, Arial, sans-serif; font-weight: 700; font-size: 16px; line-height: 24px; margin: 0;color: #333333">${processInlineElements(line.substring(4))}</p>`);
                continue;
            }
            
            if (line.startsWith('- ')) {
                if (!inList || inOrderedList) {
                    closeCurrentBlock();
                    inList = true;
                    inOrderedList = false;
                    processedLines.push('<ul>');
                }
                processedLines.push(`<li style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 400; font-size: 14px; line-height: 20px; margin: 0;color: #666666">${processInlineElements(line.substring(2))}</li>`);
                continue;
            }
            
            if (line.match(/^\d+\. /)) {
                const match = line.match(/^(\d+)\. (.*)/);
                if (match) {
                    if (!inList || !inOrderedList) {
                        closeCurrentBlock();
                        inList = true;
                        inOrderedList = true;
                        processedLines.push('<ol>');
                    }
                    processedLines.push(`<li>${processInlineElements(match[2])}</li>`);
                    continue;
                }
            }
            
            if (inList && !line.startsWith('- ') && !line.match(/^\d+\. /)) {
                inList = false;
                processedLines.push(inOrderedList ? '</ol>' : '</ul>');
                inOrderedList = false;
            }
            
            if (line.trim() !== '') {
                if (!inParagraph) {
                inParagraph = true;
                processedLines.push(`<p style="font-family: SuisseIntl, Arial, Helvetica, sans-serif; font-weight: 400; font-size: 14px; line-height: 20px; margin: 0;color: #666666">${processInlineElements(line)}`);
                } else {
                processedLines[processedLines.length - 1] += ` ${processInlineElements(line)}`;
                }
            } else {
                if (inParagraph) {
                    processedLines[processedLines.length - 1] += '</p>';
                    inParagraph = false;
                } else {
                    processedLines.push('<br />');
                }
            }
        }
    
    closeCurrentBlock();
    
    return processedLines.join('');
}

export default markdownToHtml