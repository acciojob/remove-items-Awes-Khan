//your JS code here. If required.

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', () => {
	const colorSelect = document.getElementById('colorSelect');
    const selectedIndex = colorSelect.selectedIndex;    
    if (selectedIndex !== -1)
        colorSelect.remove(selectedIndex);
});

