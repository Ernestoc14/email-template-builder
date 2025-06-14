function downloadHTMLFile(htmlString: string, filename: string) {
    const blob = new Blob([htmlString], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
export default downloadHTMLFile