document.oncontextmenu = () => {
	alert("Don't right click")
	return false
}

document.onkeydown = e => {
	if (e.key == "F12") {
	alert("Don't try to inspect element")
	return false
}
	if(e.ctrlKey && e.key == "u"){
		alert("Don't try to view page sources")
		return false
	}
	if (e.ctrlKey && e.key == "c"){
		alert("Don't try to copy page element")
		return false
	}
	if(e.ctrlKey && e.key == "v"){
		alert("Don't try to paste anything to page")
		return false
	}
}

const comeback = document.getElementById("btn2");
const yes = document.getElementById("btn1");

//group 1 of btts

const btt1 = document.getElementById('btt1');
const btt2 = document.getElementById('btt2');
const btt3 = document.getElementById('btt3');
const btt4 = document.getElementById('btt4');
const btt5 = document.getElementById('btt5');
const btt6 = document.getElementById('btt6');
const btt7 = document.getElementById('btt7');
const btt8 = document.getElementById('btt8');
const btt9 = document.getElementById('btt9');
const btt10 = document.getElementById('btt10');
const btt11 = document.getElementById('btt11');
const btt12 = document.getElementById('btt12'); 

//second group of btts

const bbtt1 = document.getElementById('bbtt1');
const bbtt2 = document.getElementById('bbtt2');
const bbtt3 = document.getElementById('bbtt3');
const bbtt4 = document.getElementById('bbtt4');
const bbtt5 = document.getElementById('bbtt5');
const bbtt6 = document.getElementById('bbtt6');
const bbtt7 = document.getElementById('bbtt7');
const bbtt8 = document.getElementById('bbtt8');
const bbtt9 = document.getElementById('bbtt9');
const bbtt10 = document.getElementById('bbtt10');
const bbtt11 = document.getElementById('bbtt11');
const bbtt12 = document.getElementById('bbtt12'); 


//IMAGESSSSSS///////

const hands = document.getElementById('hands');
const sadcat = document.getElementById('sadcat');
const crying = document.getElementById('crying');
const sadboi = document.getElementById('sadboi');
const sadman  = document.getElementById('sadman');
const hahahuhu = document.getElementById('hahahuhu');
const hang = document.getElementById('hang');
const sadsad = document.getElementById('sadsad');



// Fungsi untuk mengatur opacity elemen
function setOpacity(elements, opacities) {
    elements.forEach((element, index) => {
        element.style.opacity = opacities[index];
    });
}

// Menyimpan elemen dalam array
const buttons = [comeback, btt12, bbtt3, btt1, btt4, btt2, bbtt1, bbtt8, btt6];
const initialOpacities = ["1", "0", "0", "0", "0", "0", "0", "0", "0"];

// Fungsi untuk mengatur ulang ke keadaan awal
function resetButtons() {
    setOpacity(buttons, initialOpacities);
}

// Event listener untuk setiap tombol
comeback.addEventListener("click", function () {
    setOpacity([btt12, comeback], ["1", "0"]);
});

btt12.addEventListener("click", function () {
    setOpacity([btt12, bbtt3], ["0", "1"]);
});

bbtt3.addEventListener("click", function () {
    setOpacity([btt1, bbtt3], ["1", "0"]);
});

btt1.addEventListener("click", function () {
    setOpacity([btt1, btt4], ["0", "1"]);
});

btt4.addEventListener("click", function () {
    setOpacity([btt2, btt4], ["1", "0"]);
});

btt2.addEventListener("click", function () {
    setOpacity([btt2, bbtt1], ["0", "1"]);
});

bbtt1.addEventListener("click", function () {
    setOpacity([bbtt8, bbtt1], ["1", "0"]);
});

bbtt8.addEventListener("click", function () {
    setOpacity([bbtt8, btt6], ["0", "1"]);
});

btt6.addEventListener("click", function () {
    setOpacity([btt12, comeback, bbtt6, bbtt8], ["1", "0", "0", "0"]);
    resetButtons();
});








