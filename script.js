const darkMode = () => {
    if (document.getElementById('dark-mode').getAttribute('href') == '') {
        document.getElementById('dark-mode').setAttribute('href', 'dark.css')
        document.getElementsByClassName('dark-mode-btn')[0].innerHTML = '🌞'
    } else {
        document.getElementById('dark-mode').setAttribute('href', '')
        document.getElementsByClassName('dark-mode-btn')[0].innerHTML = '🌔'
    }
}