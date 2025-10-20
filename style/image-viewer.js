
document.addEventListener('DOMContentLoaded', function() {
    
    const modal = document.querySelector('.image-modal');
    if (!modal) {
        return;
    }

    const modalImage = modal.querySelector('.modal-image');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const closeBtn = modal.querySelector('.modal-close');
    const zoomInBtn = modal.querySelector('.zoom-in');
    const zoomOutBtn = modal.querySelector('.zoom-out');
    const resetZoomBtn = modal.querySelector('.reset-zoom');
    
    let currentScale = 1;
    const minScale = 0.5;
    const maxScale = 3;
    const scaleStep = 0.2;
    

    function openModal(imageSrc) {
        modalImage.src = imageSrc;
        modal.style.display = 'flex';
        currentScale = 1;
        updateImageScale();
        document.body.style.overflow = 'hidden';
    }
  
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
  
    function updateImageScale() {
        modalImage.style.transform = `scale(${currentScale})`;
        resetZoomBtn.textContent = Math.round(currentScale * 100) + '%';
    }
  
    function zoomIn() {
        if (currentScale < maxScale) {
            currentScale = Math.min(currentScale + scaleStep, maxScale);
            updateImageScale();
        }
    }
  
    function zoomOut() {
        if (currentScale > minScale) {
            currentScale = Math.max(currentScale - scaleStep, minScale);
            updateImageScale();
        }
    }

    function resetZoom() {
        currentScale = 1;
        updateImageScale();
    }
  
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);
    resetZoomBtn.addEventListener('click', resetZoom);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    modalImage.addEventListener('wheel', function(e) {
        e.preventDefault();
        if (e.deltaY < 0) {
            zoomIn();
        } else {
            zoomOut();
        }
    });
    
    
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG' && !e.target.classList.contains('no-open-img')) {
            e.preventDefault();
            openModal(e.target.src);
        }
    });
});
