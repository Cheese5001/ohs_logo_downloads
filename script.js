function downloadImage(url, filename) {
  // If only a filename is given, treat as relative path
  const fileUrl = url || filename;
  const name = filename || (url ? url.split('/').pop() : 'download');
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadManyCopies(url, count) {
  for (let i = 1; i <= count; i++) {
    const link = document.createElement('a');
    link.href = url;
    link.download = `copy_${i}_${url.split('/').pop()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// Example usage:
downloadManyCopies('ohs_emblem_transpernt_background.svg', 1000000);