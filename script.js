const khodamList = [
    "Maung Bodas",
    "Bubuk Ranginang",
    "Biskuat",
    "Kosong",
    "Masako"
];

function cekKhodam() {
    const name = document.getElementById('nameInput').value;
    if (name.trim() !== "") {
        const randomIndex = Math.floor(Math.random() * khodamList.length);
        const khodam = khodamList[randomIndex];
        document.getElementById('khodamResult').textContent = khodam;
    } else {
        document.getElementById('khodamResult').textContent = "Nama tidak boleh kosong!";
    }
}
