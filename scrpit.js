            if (!svgElement) return;

            const svgString = new XMLSerializer().serializeToString(svgElement);
            const blob = new Blob([svgString], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            
            document.body.appendChild(link);
            link.click();
            
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
// Show image in preview area
function showImage(filename) {
    const previewSection = document.getElementById('image-preview-section');
    const previewImg = document.getElementById('image-preview');
    previewImg.src = filename;
    previewSection.style.display = 'block';
}

// Close the preview area
function closePreview() {
    const previewSection = document.getElementById('image-preview-section');
    const previewImg = document.getElementById('image-preview');
    previewSection.style.display = 'none';
    previewImg.src = '';
}

// Download the image by filename
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Download the image by URL and filename (works for both local and external images)
function downloadImage(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || url.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
// Download the image by URL and filename (works for both local and external images)
function downloadImage(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || url.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
}