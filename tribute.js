document.getElementById('showVideo').onclick = function() {
    document.getElementById('videoModal').style.display = 'block';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('videoModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('videoModal')) {
        document.getElementById('videoModal').style.display = 'none';
    }
}
