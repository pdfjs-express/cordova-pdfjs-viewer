import React from 'react'

const path = 'lib/web/viewer.html'

const PdfJSViewer = ({ height, width, url }) => {
    let pdfPath = url ? path + '?file=' + url : path;
    
    return (
        <div style={{ width, height }}>
            {
                <iframe
                    title={pdfPath}
                    width='100%'
                    height='100%'
                    src={pdfPath}
                >
                </iframe>
            }
        </div>
    )
}

export default PdfJSViewer