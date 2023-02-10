const darkModeStyle = document.getElementById('dark-mode')
const darkModeBtn = document.getElementsByClassName('dark-mode-btn')[0]

const darkMode = () => {
    if (darkModeStyle.getAttribute('href') == '') {
        darkModeStyle.setAttribute('href', 'dark.css')
        darkModeBtn.innerHTML = '🌞'
    } else {
        darkModeStyle.setAttribute('href', '')
        darkModeBtn.innerHTML = '🌔'
    }
}
