var currentTheme = 'light';

var onThemeChanged = function() {
    let styleDiv = document.getElementById("themeStyleSheet");
    if(currentTheme === 'light') {
        currentTheme = 'dark';
        styleDiv.href = "dark.css";
    } else if(currentTheme === 'dark') {
        currentTheme = 'light';
        styleDiv.href = "light.css";
    }
}