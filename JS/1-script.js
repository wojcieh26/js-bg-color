function changeColor() {
    console.log('click');
    document.getElementsByTagName('p')[0].classList.toggle('bg-red');
    document.getElementsByTagName('p')[1].classList.toggle('bg-yellow');
};

document.querySelector('button').addEventListener('click', changeColor);